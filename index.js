const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `this is what we want to know about Zuhra Hashimi: ${textIn}.\ncreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('file written successfully');