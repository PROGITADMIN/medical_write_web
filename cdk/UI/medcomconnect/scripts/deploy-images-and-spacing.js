const fs = require('fs');
const path = require('path');

const availableImages = [
  'card-writing.png',
  'card-digital.png',
  'card-education.png',
  'card-publishing.png'
];

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
      
      // 1. Expand Grid Gaps
      content = content.replace(
        /className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"/g,
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"'
      );
      
      // 2. Swap Icons for Images
      let imgIndex = 0;
      content = content.replace(
        /<div className="w-12 h-12 bg-\[var\(--warm-card\)\] rounded-lg flex items-center justify-center text-\[var\(--teal\)\] mb-6 border border-\[var\(--cream-dark\)\] relative z-10">\s*<[a-zA-Z]+ size=\{20\} \/>\s*<\/div>/g,
        (match) => {
          const imgName = availableImages[imgIndex % availableImages.length];
          imgIndex++;
          return `<div className="w-full aspect-[16/9] rounded-lg mb-6 overflow-hidden border border-[var(--cream-dark)] relative z-10">
                  <Image src="/images/${imgName}" alt="Featured image" fill className="object-cover transition-transform group-hover:scale-105 duration-500" />
                </div>`;
        }
      );
      
      // 3. Auto-import Next/Image if missing and if we added images
      if (content !== originalContent && content.includes('<Image ')) {
        if (!content.includes('import Image from "next/image"')) {
          // Add it after the "use client" or at the top
          if (content.startsWith('"use client";')) {
            content = content.replace('"use client";', '"use client";\nimport Image from "next/image";');
          } else {
            content = 'import Image from "next/image";\n' + content;
          }
        }
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('Global image and spacing deployment completed successfully.');
