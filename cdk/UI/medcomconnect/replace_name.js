const fs = require('fs');
const path = require('path');

const dir = './src';
const search = 'MedCom Connect';
const replace = 'MedWrite Global Solutions';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(dir);
let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes(search)) {
        content = content.replace(new RegExp(search, 'g'), replace);
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
        count++;
    }
});
console.log(`Updated ${count} files.`);
