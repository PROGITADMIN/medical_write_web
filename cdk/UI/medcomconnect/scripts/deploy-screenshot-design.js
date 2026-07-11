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
      
      // 1. Revert grid
      content = content.replace(
        /className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8 \[&>\*\]:w-full md:\[&>\*\]:w-\[calc\(50%-1\.5rem\)\] lg:\[&>\*\]:w-\[calc\(33\.333%-2rem\)\]"/g,
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"'
      );
      
      // 2. Automated Section Numbering
      let sectionCounter = 1;
      // We match `<SectionLayout title="Some Title"` or `<SectionLayout title="Some Title" bg="alternate"` etc
      // Careful not to match if it already has a badge
      content = content.replace(/<SectionLayout([^>]*?)title="([^"]+)"([^>]*?)>/g, (match, before, title, after) => {
        if (before.includes('badge=') || after.includes('badge=')) return match;
        const numStr = sectionCounter.toString().padStart(2, '0');
        sectionCounter++;
        return `<SectionLayout${before}badge="${numStr} — ${title.toUpperCase()}" title="${title}"${after}>`;
      });
      
      // 3. Card Styling Upgrades
      content = content.replace(
        /className="relative group flex flex-col items-center text-center bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-\[var\(--cream-dark\)\] hover:shadow-\[0_16px_48px_rgba\(6,78,59,0\.1\)\] hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full"/g,
        'className="relative group flex flex-col text-left bg-white rounded-xl p-8 shadow-sm border border-[var(--cream-dark)] hover:-translate-y-1 transition-all duration-300"'
      );
      
      // 4. Icon & Typography Upgrades
      content = content.replace(
        /className="w-16 h-16 bg-\[var\(--warm-card\)\] rounded-2xl flex items-center justify-center text-\[var\(--brown-mid\)\] mb-6 border border-\[var\(--cream-dark\)\] relative z-10 transition-transform group-hover:scale-110 duration-300"/g,
        'className="w-12 h-12 bg-[var(--warm-card)] rounded-lg flex items-center justify-center text-[var(--teal)] mb-6 border border-[var(--cream-dark)] relative z-10"'
      );
      
      // Resize the icon inside (assuming it's a lucide-react icon with size={28})
      content = content.replace(/size=\{28\}/g, 'size={20}');
      
      // Update paragraph spacing slightly
      content = content.replace(
        /<p className="text-\[var\(--text-muted\)\] leading-relaxed text-\[0\.95rem\] flex-grow relative z-10">/g,
        '<p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem] mb-6 flex-grow relative z-10">'
      );
      
      // Update link styles
      const oldLinkRegex = /<div className="mt-auto">\s*<div className="inline-flex items-center gap-2 text-\[var\(--brown-dark\)\] font-semibold text-sm group cursor-pointer border-b border-transparent pb-0\.5 hover:text-\[var\(--brown-mid\)\] hover:border-\[var\(--brown-mid\)\] transition-colors">\s*([^<]+?)\s*<ChevronRight size=\{16\} className="transition-transform group-hover:translate-x-1" \/>\s*<\/div>\s*<\/div>/g;
      content = content.replace(oldLinkRegex, `<div className="inline-flex items-center gap-1 text-[var(--teal)] font-semibold text-sm group cursor-pointer hover:text-[var(--brown-mid)] transition-colors mt-auto">
                    $1 <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>`);
      
      // In case they are using Links instead of divs for the buttons
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('Global redesign deployment completed successfully.');
