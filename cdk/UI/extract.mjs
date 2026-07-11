import { readFileSync } from 'fs';
import { createWriteStream } from 'fs';
import { unzipSync } from 'zlib';

// Read the docx file (it's a zip)
const filePath = 'C:/Users/HP/OneDrive/Desktop/medwrite/MedCom_Connect_Expanded_All_Card_Content_Specification.docx';
const data = readFileSync(filePath);

// Use a manual approach to read ZIP entries
// DOCX files are ZIP archives containing XML
// Let's use the built-in approach

import { DOMParser } from 'xmldom';

// Actually let's use a simpler approach
// Read as buffer and find the document.xml content
const buf = data;
const marker = Buffer.from('word/document.xml');

console.log('File size:', buf.length);
console.log('Attempting extraction...');
