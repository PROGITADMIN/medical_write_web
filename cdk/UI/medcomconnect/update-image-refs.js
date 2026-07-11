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
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace old image references with the new cache-busting filename
  content = content.replace(/\/images\/about-hero\.png/g, '/images/writing-hero.png');
  content = content.replace(/\/images\/learning-hero\.png/g, '/images/writing-hero.png');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated image references in ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), processFile);
