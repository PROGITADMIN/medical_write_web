const fs = require('fs');
const path = require('path');

const contentFile = path.join(__dirname, '../../extracted_content.txt');
const rawContent = fs.readFileSync(contentFile, 'utf8').replace(/\r\n/g, '\n');

const pages = [];
const pageRegex = /\n(\d{2})\. ([^\n]+)\n([\s\S]*?)(?=\n\d{2}\. |\n$)/g;

let match;
while ((match = pageRegex.exec('\n' + rawContent)) !== null) {
  const id = match[1];
  const name = match[2].trim();
  const body = match[3];

  let heroMatch = body.match(/HERO CONTENT - COPY TO PLACE ON THE PAGE\n([^\n]+)\n([\s\S]*?)(?=DETAILED CONTENT MODULES)/);
  let heroTitle = heroMatch ? heroMatch[1].trim() : name;
  let heroDesc = heroMatch ? heroMatch[2].trim() : '';

  let modules = [];
  let modRegex = /(\d+)\. ([^\n]+)\n([\s\S]*?)(?=\n\d+\. |\nPage-level quality check|$)/g;
  let modMatch;
  while ((modMatch = modRegex.exec(body)) !== null) {
      const modTitle = modMatch[2].trim();
      const modBody = modMatch[3];
      
      const cards = [];
      const cardRegex = /Exact on-card copy:\s*[“"]?([^”"\n]+)[”"]?\nAction:\s*([^\n]+)/g;
      let cMatch;
      while ((cMatch = cardRegex.exec(modBody)) !== null) {
          cards.push({ copy: cMatch[1].trim(), action: cMatch[2].trim() });
      }
      modules.push({ title: modTitle, cards });
  }

  pages.push({ id, name, heroTitle, heroDesc, modules });
}

console.log(`Parsed ${pages.length} pages.`);
if (pages.length > 0) {
  console.log("Page 2: ", JSON.stringify(pages[1], null, 2));
}
