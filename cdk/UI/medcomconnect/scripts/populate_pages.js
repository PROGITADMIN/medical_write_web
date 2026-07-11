const fs = require('fs');
const path = require('path');

const contentFile = path.join(__dirname, '../../extracted_content.txt');
const rawContent = fs.readFileSync(contentFile, 'utf8').replace(/\r\n/g, '\n');

// 1. Parse pages
const pages = [];
const pageRegex = /\n(\d{2})\. ([^\n]+)\n([\s\S]*?)(?=\n\d{2}\. |\n$)/g;

let match;
while ((match = pageRegex.exec('\n' + rawContent)) !== null) {
  const id = match[1];
  const name = match[2].trim();
  const body = match[3];

  let heroMatch = body.match(/HERO CONTENT - COPY TO PLACE ON THE PAGE\n([^\n]+)\n([\s\S]*?)(?=DETAILED CONTENT MODULES)/);
  let heroTitle = heroMatch ? heroMatch[1].trim() : name;
  let heroDesc = heroMatch ? heroMatch[2].trim() : '';

  let modules = [];
  let modRegex = /(\d+)\. ([^\n]+)\n([\s\S]*?)(?=\n\d+\. |\nPage-level quality check|$)/g;
  let modMatch;
  while ((modMatch = modRegex.exec(body)) !== null) {
      const modTitle = modMatch[2].trim();
      const modBody = modMatch[3];
      
      const cards = [];
      const cardRegex = /Exact on-card copy:\s*[“"]?([^”"\n]+)[”"]?\nAction:\s*([^\n]+)/g;
      let cMatch;
      while ((cMatch = cardRegex.exec(modBody)) !== null) {
          let copyText = cMatch[1].trim();
          let actionText = cMatch[2].trim();
          
          actionText = actionText.replace(/Primary CTA:\s*/ig, '')
                                 .replace(/Link to:\s*/ig, '')
                                 .replace(/Secondary CTA:.*/ig, '')
                                 .replace(/secondary link:.*/ig, '')
                                 .trim();
          
          if (actionText.includes(';')) {
              actionText = actionText.split(';')[0].trim();
          }
          
          cards.push({ copy: copyText, action: actionText });
      }
      modules.push({ title: modTitle, cards });
  }

  pages.push({ id, name, heroTitle, heroDesc, modules });
}

// 2. Map directories to parsed pages
const appDir = path.join(__dirname, '../src/app');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            if (file.endsWith('page.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const allPages = getFiles(appDir).map(p => path.relative(appDir, p).replace(/\\/g, '/'));

const routeMap = {
    'about/page.tsx': 'About MedCom Connect',
    'about/governance/page.tsx': 'Governance, Conduct and Policies',
    'about/mission/page.tsx': 'Mission and Values',
    'about/story/page.tsx': 'Our Story',
    'about/team/page.tsx': 'Leadership and Committees',
    'career/page.tsx': 'Career Hub',
    'career/experts/page.tsx': 'Expert Finder',
    'career/independent/page.tsx': 'Independent Practice Hub',
    'career/jobs/page.tsx': 'Job Board',
    'community/page.tsx': 'Community Hub',
    'community/boards/page.tsx': 'Digital Health and AI Forum',
    'community/chapters/page.tsx': 'Local Chapters',
    'community/circles/page.tsx': 'Practice Circles',
    'community/peer-labs/page.tsx': 'Peer Labs',
    'events/page.tsx': 'Events Hub',
    'events/archives/page.tsx': 'Past Events and Archives',
    'events/congress/page.tsx': 'Annual MedCom Congress',
    'events/digital-week/page.tsx': 'Digital Learning Week',
    'events/regional/page.tsx': 'Regional and Community Events',
    'get-involved/page.tsx': 'Get Involved Hub',
    'get-involved/ambassador/page.tsx': 'Ambassador Programme',
    'get-involved/volunteer/page.tsx': 'Volunteer Opportunities',
    'knowledge/page.tsx': 'Knowledge Hub',
    'knowledge/journal/page.tsx': 'MedCom Review Journal',
    'knowledge/library/page.tsx': 'Resource Library',
    'knowledge/reviews/page.tsx': 'Book and Tool Reviews',
    'knowledge/standards/page.tsx': 'Standards Studio',
    'learning/page.tsx': 'Learning Hub',
    'learning/certificate/page.tsx': 'Professional Certificate',
    'learning/contribute/page.tsx': 'Become a Learning Contributor',
    'learning/courses/page.tsx': 'Courses and Workshops',
    'learning/pathways/page.tsx': 'Professional Learning Pathways',
    'learning/webinars/page.tsx': 'Webinars',
    'legal/page.tsx': 'Legal and Trust Centre',
    'membership/page.tsx': 'Membership Hub',
    'membership/apply/page.tsx': 'Join MedCom Connect',
    'membership/benefits/page.tsx': 'Membership Benefits',
    'news/page.tsx': 'News and Updates',
    'partner/page.tsx': 'Partner, Sponsor and Advertise',
    'signin/page.tsx': 'Sign In'
};

const ICONS = ["FileText", "Stethoscope", "Microscope", "Brain", "Users", "LineChart", "Shield", "Target", "BookOpen", "Presentation", "Calendar", "Award", "Globe", "Heart", "Briefcase", "CheckCircle2"];

let updatedCount = 0;

Object.entries(routeMap).forEach(([route, pageName]) => {
    const pageData = pages.find(p => p.name === pageName);
    if (!pageData) return;
    const filePath = path.join(appDir, route);
    if (!fs.existsSync(filePath)) return;

    let jsx = `"use client";\n`;
    jsx += `import PageHero from "@/components/Shared/PageHero";\n`;
    jsx += `import SectionLayout from "@/components/Shared/SectionLayout";\n`;
    jsx += `import CallToAction from "@/components/Shared/CallToAction";\n`;
    jsx += `import { ${ICONS.join(', ')}, ChevronRight } from "lucide-react";\n`;
    jsx += `import { motion } from "framer-motion";\n`;
    jsx += `import Link from "next/link";\n\n`;

    jsx += `export default function ${pageName.replace(/[^a-zA-Z]/g, '')}Page() {\n`;
    jsx += `  return (\n`;
    jsx += `    <main className="min-h-screen bg-[var(--warm-bg)]">\n`;
    jsx += `      <PageHero\n`;
    jsx += `        badge="${pageName}"\n`;
    jsx += `        title="${pageData.heroTitle.replace(/"/g, '&quot;')}"\n`;
    jsx += `        description="${pageData.heroDesc.replace(/"/g, '&quot;')}"\n`;
    jsx += `      />\n\n`;
    jsx += `      <div className="flex flex-col">\n`;

    pageData.modules.forEach((mod, idx) => {
        if (mod.cards.length === 0) return;

        let layoutType = "icon-cards"; // default
        if (mod.cards.length === 4) {
            layoutType = "feature-hub";
        } else if (idx % 2 === 1) {
            layoutType = "horizontal-list";
        }

        const bgProp = (idx % 2 === 0) ? "white" : "alternate";

        if (layoutType === "icon-cards") {
            jsx += `        <SectionLayout badge="0${idx + 1} — ${mod.title.toUpperCase()}" title="${mod.title}" bg="${bgProp}">\n`;
            jsx += `          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">\n`;
            mod.cards.forEach((card, cIdx) => {
                let icon = ICONS[(idx * 5 + cIdx) % ICONS.length];
                const titleMatch = card.copy.match(/^([^.?!]{5,35})[.?!]/);
                const cardTitle = titleMatch ? titleMatch[1] : card.copy.split(' ').slice(0, 3).join(' ');
                
                jsx += `            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: ${cIdx * 0.1}}} className="col-span-12 md:col-span-6 lg:col-span-4 relative group flex flex-col h-full text-left bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] hover:-translate-y-[6px] transition-all duration-300">\n`;
                jsx += `              <div className="w-12 h-12 bg-[var(--warm-card)] rounded-[14px] flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">\n`;
                jsx += `                <${icon} size={20} />\n`;
                jsx += `              </div>\n`;
                jsx += `              <h3 className="text-xl font-display text-[var(--brown-dark)] mb-3">${cardTitle}</h3>\n`;
                jsx += `              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-8 flex-grow relative z-10 max-w-[700px]">\n`;
                jsx += `                ${card.copy}\n`;
                jsx += `              </p>\n`;
                if (card.action.toLowerCase() !== "none") {
                    jsx += `              <div className="mt-auto">\n`;
                    jsx += `                <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">\n`;
                    jsx += `                  ${card.action} <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />\n`;
                    jsx += `                </div>\n`;
                    jsx += `              </div>\n`;
                }
                jsx += `            </motion.div>\n`;
            });
            jsx += `          </div>\n`;
            jsx += `        </SectionLayout>\n\n`;

        } else if (layoutType === "horizontal-list") {
            jsx += `        <SectionLayout badge="0${idx + 1} — ${mod.title.toUpperCase()}" title="${mod.title}" bg="${bgProp}">\n`;
            jsx += `          <div className="flex flex-col max-w-4xl mx-auto">\n`;
            mod.cards.forEach((card, cIdx) => {
                jsx += `            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay: ${cIdx * 0.1}}} className="flex items-start gap-6 md:gap-8 py-10 border-b border-[var(--cream-dark)] last:border-0">\n`;
                jsx += `              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">\n`;
                jsx += `                ${cIdx + 1}\n`;
                jsx += `              </div>\n`;
                jsx += `              <div className="flex flex-col gap-3 md:gap-4 flex-grow">\n`;
                jsx += `                <p className="text-[var(--text-muted)] text-[1.05rem] md:text-[1.1rem] leading-relaxed max-w-[700px]">\n`;
                jsx += `                  ${card.copy}\n`;
                jsx += `                </p>\n`;
                if (card.action.toLowerCase() !== "none") {
                    jsx += `                <div className="mt-4">\n`;
                    jsx += `                  <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">\n`;
                    jsx += `                    ${card.action} <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />\n`;
                    jsx += `                  </div>\n`;
                    jsx += `                </div>\n`;
                }
                jsx += `              </div>\n`;
                jsx += `            </motion.div>\n`;
            });
            jsx += `          </div>\n`;
            jsx += `        </SectionLayout>\n\n`;

        } else if (layoutType === "feature-hub") {
            jsx += `        <SectionLayout badge="0${idx + 1} — ${mod.title.toUpperCase()}" title="${mod.title}" bg="${bgProp}">\n`;
            jsx += `          <div className="relative max-w-6xl mx-auto py-12">\n`;
            jsx += `            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">\n`;
            
            jsx += `              <div className="col-span-12 md:col-span-5 flex flex-col gap-8">\n`;
            [0, 1].forEach(cIdx => {
                let card = mod.cards[cIdx];
                let icon = ICONS[(idx * 5 + cIdx) % ICONS.length];
                const titleMatch = card.copy.match(/^([^.?!]{5,35})[.?!]/);
                const cardTitle = titleMatch ? titleMatch[1] : card.copy.split(' ').slice(0, 3).join(' ');
                jsx += `                <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}} className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] text-right hover:-translate-y-[6px] transition-all duration-300 flex flex-col h-full">\n`;
                jsx += `                  <div className="w-10 h-10 bg-[var(--warm-bg-2)] rounded-full flex items-center justify-center text-[var(--teal)] ml-auto mb-4 border border-[var(--cream-dark)]">\n`;
                jsx += `                    <${icon} size={18} />\n`;
                jsx += `                  </div>\n`;
                jsx += `                  <h3 className="font-display text-xl text-[var(--brown-dark)] mb-3">${cardTitle}</h3>\n`;
                jsx += `                  <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-grow">${card.copy}</p>\n`;
                if (card.action.toLowerCase() !== "none") {
                    jsx += `                  <div className="mt-6 flex justify-end">\n`;
                    jsx += `                    <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">\n`;
                    jsx += `                      ${card.action} <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />\n`;
                    jsx += `                    </div>\n`;
                    jsx += `                  </div>\n`;
                }
                jsx += `                </motion.div>\n`;
            });
            jsx += `              </div>\n`;
            
            jsx += `              <div className="hidden md:flex col-span-12 md:col-span-2 justify-center">\n`;
            jsx += `                <motion.div initial={{scale:0.8, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="w-32 h-32 bg-[var(--teal)] rounded-full flex items-center justify-center text-white shadow-xl ring-8 ring-[var(--warm-bg)] relative z-10">\n`;
            jsx += `                   <Stethoscope size={48} />\n`;
            jsx += `                </motion.div>\n`;
            jsx += `              </div>\n`;
            
            jsx += `              <div className="col-span-12 md:col-span-5 flex flex-col gap-8">\n`;
            [2, 3].forEach(cIdx => {
                let card = mod.cards[cIdx];
                let icon = ICONS[(idx * 5 + cIdx) % ICONS.length];
                const titleMatch = card.copy.match(/^([^.?!]{5,35})[.?!]/);
                const cardTitle = titleMatch ? titleMatch[1] : card.copy.split(' ').slice(0, 3).join(' ');
                jsx += `                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}} className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_rgba(15,41,66,0.04)] border border-[var(--cream-dark)] text-left hover:-translate-y-[6px] transition-all duration-300 flex flex-col h-full">\n`;
                jsx += `                  <div className="w-10 h-10 bg-[var(--warm-bg-2)] rounded-full flex items-center justify-center text-[var(--teal)] mb-4 border border-[var(--cream-dark)]">\n`;
                jsx += `                    <${icon} size={18} />\n`;
                jsx += `                  </div>\n`;
                jsx += `                  <h3 className="font-display text-xl text-[var(--brown-dark)] mb-3">${cardTitle}</h3>\n`;
                jsx += `                  <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-grow">${card.copy}</p>\n`;
                if (card.action.toLowerCase() !== "none") {
                    jsx += `                  <div className="mt-6">\n`;
                    jsx += `                    <div className="btn-secondary text-sm w-max inline-flex items-center group cursor-pointer">\n`;
                    jsx += `                      ${card.action} <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />\n`;
                    jsx += `                    </div>\n`;
                    jsx += `                  </div>\n`;
                }
                jsx += `                </motion.div>\n`;
            });
            jsx += `              </div>\n`;
            
            jsx += `            </div>\n`;
            jsx += `          </div>\n`;
            jsx += `        </SectionLayout>\n\n`;
        }
    });

    jsx += `      </div>\n`;

    jsx += `    </main>\n  );\n}\n`;

    fs.writeFileSync(filePath, jsx);
    updatedCount++;
});

console.log(`Successfully updated ${updatedCount} pages with the new strict 12-col 10-point design system.`);
