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
      // Skip the main home page
      if (fullPath === path.join(__dirname, '../src/app/page.tsx')) {
        continue;
      }
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // 1. Remove the imageSrc line from PageHero
      content = content.replace(/\s*imageSrc="[^"]*"/g, '');
      
      // 2. Refactor the generic "under construction" section to be more structured and airy
      const oldSectionRegex = /<section className="section bg-\[var\(--warm-bg\)\] min-h-\[40vh\] flex items-center justify-center">([\s\S]*?)<\/section>/g;
      
      content = content.replace(oldSectionRegex, (match, innerContent) => {
        return `<section className="section bg-white min-h-[60vh] flex flex-col items-center justify-center py-32">\n${innerContent}\n      </section>`;
      });

      // 3. Make sure the container inside the generic section has more padding and center alignment
      const oldContainerRegex = /<div className="container-site max-w-3xl mx-auto text-center">\s*<div className="p-12 rounded-\[2rem\] bg-white shadow-sm border border-\[var\(--cream-dark\)\]">/g;
      content = content.replace(oldContainerRegex, `<div className="container-site max-w-4xl mx-auto text-center flex flex-col items-center">\n          <div className="p-16 md:p-24 rounded-[3rem] bg-[var(--warm-bg-2)] shadow-md border border-[var(--cream-dark)] w-full">`);

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('Global layout refactor completed successfully.');
