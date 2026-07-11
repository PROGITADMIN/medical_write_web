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
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.css')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace old blue hover shadow color with green hover shadow
  content = content.replace(/rgba\(30,58,138,0\.1\)/g, 'rgba(6,78,59,0.1)');
  content = content.replace(/rgba\(30,\s*58,\s*138,\s*0\.1\)/g, 'rgba(6,78,59,0.1)');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated theme colors in ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), processFile);
