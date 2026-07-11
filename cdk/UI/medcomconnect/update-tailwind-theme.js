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

  // Replace common Tailwind blue classes with green equivalents
  const replacements = [
    { from: /\bprose-blue\b/g, to: 'prose-green' },
    { from: /\bbg-blue-50\b/g, to: 'bg-green-50' },
    { from: /\bbg-blue-100\b/g, to: 'bg-green-100' },
    { from: /\bbg-blue-200\b/g, to: 'bg-green-200' },
    { from: /\bbg-blue-600\b/g, to: 'bg-green-600' },
    { from: /\bbg-blue-700\b/g, to: 'bg-green-700' },
    { from: /\btext-blue-50\b/g, to: 'text-green-50' },
    { from: /\btext-blue-100\b/g, to: 'text-green-100' },
    { from: /\btext-blue-600\b/g, to: 'text-green-600' },
    { from: /\btext-blue-700\b/g, to: 'text-green-700' },
    { from: /\btext-blue-800\b/g, to: 'text-green-800' },
    { from: /\btext-blue-900\b/g, to: 'text-green-900' },
    { from: /\border-blue-100\b/g, to: 'border-green-100' },
    { from: /\border-blue-200\b/g, to: 'border-green-200' },
    { from: /\border-blue-300\b/g, to: 'border-green-300' },
    { from: /\border-blue-500\b/g, to: 'border-green-500' },
    { from: /\border-blue-600\b/g, to: 'border-green-600' },
    { from: /\bfocus:border-blue-500\b/g, to: 'focus:border-green-500' },
    { from: /\bfocus:ring-blue-500\b/g, to: 'focus:ring-green-500' },
    { from: /\bfocus:ring-blue-600\b/g, to: 'focus:ring-green-600' },
    { from: /\bhover:bg-blue-50\b/g, to: 'hover:bg-green-50' },
    { from: /\bhover:bg-blue-100\b/g, to: 'hover:bg-green-100' },
    { from: /\bhover:bg-blue-700\b/g, to: 'hover:bg-green-700' },
    { from: /\bhover:bg-blue-800\b/g, to: 'hover:bg-green-800' },
    { from: /\bhover:border-blue-300\b/g, to: 'hover:border-green-300' },
    { from: /\bhover:border-blue-400\b/g, to: 'hover:border-green-400' }
  ];

  for (const rep of replacements) {
    content = content.replace(rep.from, rep.to);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Tailwind blue classes in ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), processFile);
