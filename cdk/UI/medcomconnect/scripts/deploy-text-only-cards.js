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
      // Don't touch the one we already manually perfected or the home page
      if (fullPath.includes('career\\navigator') || fullPath.includes('career/navigator') || fullPath === path.join(__dirname, '../src/app/page.tsx')) {
        continue;
      }
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // 1. Remove Image Imports
      content = content.replace(/import Image from "next\/image";\n?/g, '');
      
      // 2. Remove Image Blocks
      const imageBlockRegex = /<div className="w-full aspect-\[16\/9\] rounded-lg mb-6 overflow-hidden border border-\[var\(--cream-dark\)\] relative z-10">\s*<Image src="\/images\/[^"]+" alt="Featured image" fill className="object-cover transition-transform group-hover:scale-105 duration-500" \/>\s*<\/div>/g;
      content = content.replace(imageBlockRegex, '');
      
      // 3. Increase Card Padding
      content = content.replace(
        /className="relative group flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-\[var\(--cream-dark\)\] hover:-translate-y-1 transition-all duration-300"/g,
        'className="relative group flex flex-col text-left bg-white rounded-xl p-10 md:p-12 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-all duration-300"'
      );
      
      // 4. Increase Grid Gaps
      content = content.replace(
        /className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"/g,
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"'
      );
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('Global text-only cleanup deployment completed successfully.');
