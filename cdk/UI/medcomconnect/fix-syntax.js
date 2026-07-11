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
  if (!filePath.endsWith('page.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Let's find all <SectionLayout> and </SectionLayout>
  const openCount = (content.match(/<SectionLayout/g) || []).length;
  const closeCount = (content.match(/<\/SectionLayout>/g) || []).length;

  if (closeCount > openCount) {
    // There are erroneous closing tags.
    // Because we know exactly what happened: we blindly replaced `</div></section>` with `</SectionLayout>`.
    // The easiest way to fix it is to change ALL `</SectionLayout>` back to `</div>\n      </section>`,
    // and then ONLY change the ones that match an opening `<SectionLayout` back to `</SectionLayout>`.
    
    // First, find all <SectionLayout> opening blocks.
    // We can't do this with pure string replace easily.
    // But since the erroneous ones are paired with `<section className="...`, 
    // we can parse through the file block by block.
    
    // Actually, we can just split the file by `</SectionLayout>`.
    // We know that `SectionLayout` cannot be nested.
    // So we iterate through the document looking for `<SectionLayout` or `<section`.
    // When we find a closing tag, we check what the currently open tag is!
    
    let result = '';
    let i = 0;
    let stack = [];
    
    // Regex to find openings and closings
    const regex = /(<SectionLayout|<section|<\/SectionLayout>|<\/section>)/g;
    
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(content)) !== null) {
      result += content.substring(lastIndex, match.index);
      
      const tag = match[1];
      if (tag === '<SectionLayout') {
        stack.push('SectionLayout');
        result += tag;
      } else if (tag === '<section') {
        stack.push('section');
        result += tag;
      } else if (tag === '</SectionLayout>') {
        const lastOpen = stack.pop();
        if (lastOpen === 'section') {
          // Erroneous replacement! It should close a section and a div.
          // Wait, originally we replaced `</div></section>` or `</div>\n</section>`.
          result += '</div>\n      </section>';
        } else {
          result += tag;
        }
      } else if (tag === '</section>') {
        stack.pop();
        result += tag;
      }
      
      lastIndex = regex.lastIndex;
    }
    
    result += content.substring(lastIndex);
    
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`Fixed syntax in ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src/app'), processFile);
