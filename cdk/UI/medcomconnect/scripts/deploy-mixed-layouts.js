const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'page.tsx') {
      // Don't touch custom pages
      if (fullPath.includes('career\\navigator') || fullPath.includes('career/navigator') || fullPath === path.join(__dirname, '../src/app/page.tsx')) {
        continue;
      }
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      const parts = content.split('<SectionLayout ');
      if (parts.length > 2) {
        // We have at least 2 sections (parts[0] is preamble, parts[1] is section 1, parts[2] is section 2...)
        for (let i = 2; i < parts.length; i += 2) { // i=2 is the 2nd section, i=4 is the 4th section...
          
          let gridMatch = parts[i].match(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">([\s\S]*?)<\/div>\s*<\/SectionLayout>/);
          if (gridMatch) {
             const gridContent = gridMatch[1];
             const cardRegex = /<motion\.div[^>]*className="relative group flex flex-col text-left bg-white rounded-xl p-10 shadow-sm border border-\[var\(--cream-dark\)\] hover:-translate-y-1 transition-all duration-300">\s*<div[^>]*>\s*<[a-zA-Z]+ size=\{20\} \/>\s*<\/div>\s*<p className="text-\[var\(--text-muted\)\] leading-relaxed text-\[0\.95rem\] mb-6 flex-grow relative z-10">\s*([\s\S]*?)\s*<\/p>\s*<div className="inline-flex items-center gap-1 text-\[var\(--teal\)\] font-semibold text-sm group cursor-pointer hover:text-\[var\(--brown-mid\)\] transition-colors mt-auto">\s*([\s\S]*?)\s*<ChevronRight[^>]*\/>\s*<\/div>\s*<\/motion\.div>/g;
             
             let counter = 1;
             let horizontalListStr = `<div className="flex flex-col">\n`;
             
             let replacedCards = gridContent.replace(cardRegex, (cardMatch, desc, linkText) => {
                 const itemStr = `            <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex items-start gap-8 py-10 border-b border-[var(--cream-dark)]">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)] text-white flex items-center justify-center flex-shrink-0 font-display text-xl">
                ${counter}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[var(--text-muted)] text-[1.1rem] leading-relaxed">
                  ${desc.trim()}
                </p>
                <div className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm group cursor-pointer hover:text-[var(--brown-mid)] transition-colors">
                  ${linkText.trim()} <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>\n`;
                 counter++;
                 return itemStr;
             });
             
             horizontalListStr += replacedCards;
             horizontalListStr += `            </div>\n        </SectionLayout>`;
             
             parts[i] = parts[i].replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">([\s\S]*?)<\/div>\s*<\/SectionLayout>/, horizontalListStr);
          }
        }
        
        content = parts.join('<SectionLayout ');
        
        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('Global mixed layout deployment completed successfully.');
