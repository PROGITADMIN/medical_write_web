const fs = require('fs');
const content = fs.readFileSync('c:/Users/HP/OneDrive/Desktop/medwrite/extracted_content.txt', 'utf8');

const lines = content.split(/\r?\n/);
let found = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].toLowerCase().includes('faq') || lines[i].toLowerCase().includes('frequently asked')) {
    found.push({ line: i + 1, text: lines[i] });
  }
}

console.log(found.slice(0, 50));
