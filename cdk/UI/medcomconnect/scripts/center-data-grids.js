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
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const oldGridRegex = /className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"/g;
      
      if (oldGridRegex.test(content)) {
        content = content.replace(
          oldGridRegex,
          'className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8 [&>*]:w-full md:[&>*]:w-[calc(50%-1.5rem)] lg:[&>*]:w-[calc(33.333%-2rem)]"'
        );
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const appDir = path.join(__dirname, '../src/app');
processDirectory(appDir);
console.log('Grid to flex centering refactor completed successfully.');
