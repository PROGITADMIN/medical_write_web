const fs = require('fs');
const path = require('path');

const availableIcons = [
  'FileText',
  'Stethoscope',
  'Microscope',
  'Brain',
  'Users',
  'LineChart',
  'Shield',
  'Target',
  'BookOpen',
  'Presentation'
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
      
      // 1. Refine Card Padding
      content = content.replace(
        /className="relative group flex flex-col text-left bg-white rounded-xl p-10 md:p-12 shadow-sm border border-\[var\(--cream-dark\)\] hover:-translate-y-1 transition-all duration-300"/g,
        'className="relative group flex flex-col text-left bg-white rounded-xl p-10 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-all duration-300"'
      );
      
      // 2. Restore Icons
      let iconIndex = 0;
      content = content.replace(
        /<p className="text-\[var\(--text-muted\)\] leading-relaxed text-\[0\.95rem\] mb-6 flex-grow relative z-10">/g,
        (match) => {
          const iconName = availableIcons[iconIndex % availableIcons.length];
          iconIndex++;
          return `<div className="w-12 h-12 bg-[var(--warm-card)] rounded-lg flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10">\n                  <${iconName} size={20} />\n                </div>\n                ${match}`;
        }
      );
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('Global icon restoration and heading centering completed successfully.');
