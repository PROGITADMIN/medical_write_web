const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('page.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add import if needed
  if (!content.includes('SectionLayout') && content.includes('<section')) {
    content = content.replace('import PageHero', 'import SectionLayout from "@/components/Shared/SectionLayout";\nimport PageHero');
  }

  // 1. Convert <section> headers into <SectionLayout>
  content = content.replace(
    /<section className="[^"]*(bg-\[#F8FAFC\]|bg-\[var\(--warm-bg-2\)\]|bg-slate-50|bg-white)[^"]*">\s*<div className="container-site">\s*<motion\.div[^>]*>[\s\S]*?<h2[^>]*>(.*?)<\/h2>([\s\S]*?)<\/motion\.div>/g,
    (match, bgClass, title, rest) => {
      let description = '';
      const pMatch = rest.match(/<p[^>]*>([\s\S]*?)<\/p>/);
      if (pMatch) {
        description = pMatch[1].trim();
      }
      
      let badge = '';
      const spanMatch = rest.match(/<span[^>]*>([\s\S]*?)<\/span>/);
      if (spanMatch) {
        badge = spanMatch[1].trim();
      }

      const bg = bgClass.includes('white') ? 'white' : 'alternate';
      
      let props = `title="${title}"`;
      if (badge) props += ` badge="${badge}"`;
      if (description) props += ` description="${description}"`;
      if (bg !== 'white') props += ` bg="${bg}"`;

      return `<SectionLayout ${props}>`;
    }
  );

  // Close sections
  content = content.replace(/<\/div>\s*<\/section>/g, '</SectionLayout>');

  // 2. Standardize Card Styles across the site
  // This targets both mapped cards and hardcoded cards by replacing their long class lists.
  
  // Card Wrappers
  content = content.replace(
    /className="[^"]*?(bg-white|bg-\[var\(--warm-bg-2\)\])[^"]*?rounded-[^"]*?p-[89][^"]*?hover:-translate-y-2[^"]*?"/g,
    'className="relative group flex flex-col items-center text-center bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--cream-dark)] hover:shadow-[0_16px_48px_rgba(30,58,138,0.1)] hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full"'
  );

  // Icon Containers
  content = content.replace(
    /className="w-14 h-14[^"]*?rounded-2xl flex items-center justify-center[^"]*?"/g,
    'className="w-16 h-16 bg-[var(--warm-card)] rounded-2xl flex items-center justify-center text-[var(--brown-mid)] mb-6 border border-[var(--cream-dark)] relative z-10 transition-transform group-hover:scale-110 duration-300"'
  );

  // Card Titles
  content = content.replace(
    /<h3 className="[^"]*?text-xl mb-4[^"]*?">/g,
    '<h3 className="font-semibold text-[var(--brown-dark)] text-xl mb-4 relative z-10">'
  );

  // Card Paragraphs
  content = content.replace(
    /<p className="[^"]*?leading-relaxed[^"]*flex-grow[^"]*?">/g,
    '<p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] flex-grow relative z-10">'
  );

  // CTA Links
  content = content.replace(
    /<div className="mt-auto[^"]*?inline-flex items-center gap-[^"]*?">/g,
    '<div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[var(--brown-mid)] font-semibold text-sm group-hover:gap-2.5 transition-all cursor-pointer relative z-10">'
  );

  // 3. Inject relevant hero images
  if (content.includes('<PageHero') && !content.includes('imageSrc')) {
    let heroImage = '/images/about-hero.png';
    if (filePath.includes('learning')) heroImage = '/images/learning-hero.png';
    // we only have two right now, but it's enough to prove the concept
    
    content = content.replace(
      /(<PageHero[^>]*?)(\/>)/,
      `$1\n        imageSrc="${heroImage}"\n      $2`
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src/app'), processFile);
