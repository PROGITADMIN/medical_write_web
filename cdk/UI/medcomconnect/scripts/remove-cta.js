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
      // We'll process all page.tsx files (if there is a CTA on the home page, it gets removed too. The user said "from all the subpages from the entire website". We can skip the home page just in case, but let's just strip it from all `page.tsx` except maybe src/app/page.tsx if we want to be safe. Actually, the user said "from all the subpages from the entire website", which might imply excluding home, but usually CTAs on subpages are repetitive.)
      if (fullPath === path.join(__dirname, '../src/app/page.tsx')) {
        continue;
      }
      
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove the <CallToAction ... /> component block
      // The block usually looks like:
      // <CallToAction 
      //   badge="Need Help?" 
      //   title="Ready to get started?" 
      // ... />
      // We will match <CallToAction and everything up to />
      const ctaRegex = /<CallToAction[\s\S]*?\/>/g;
      const importRegex = /import\s+CallToAction\s+from\s+['"]@\/components\/Shared\/CallToAction['"];?\s*/g;
      
      content = content.replace(ctaRegex, '');
      content = content.replace(importRegex, '');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('CallToAction removal completed successfully.');
