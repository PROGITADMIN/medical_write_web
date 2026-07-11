const fs = require('fs');
const path = require('path');

const targetFile = process.argv[2];

if (!targetFile) {
  console.error("Please provide a target file.");
  process.exit(1);
}

let content = fs.readFileSync(targetFile, 'utf8');

// Ensure imports
if (!content.includes('SectionLayout')) {
  content = content.replace('import PageHero', 'import SectionLayout from "@/components/Shared/SectionLayout";\nimport { FeatureGrid } from "@/components/Shared/FeatureGrid";\nimport PageHero');
}

// 1. Replace <section> headers
// We look for:
// <section className="py-24 md:py-32 bg-[#F8FAFC]"> (or similar)
//   <div className="container-site">
//     <motion.div ...>
//       <h2 ...>Title</h2>
//       <p ...>Desc</p> (optional)
//     </motion.div>

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

fs.writeFileSync(targetFile, content, 'utf8');
console.log(`Refactored ${targetFile}`);
