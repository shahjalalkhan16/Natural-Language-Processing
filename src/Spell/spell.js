const natural = require('natural');

const  corpus = ['something', 'soothing', 'sometimes'];
const spellcheck = new natural.Spellcheck(corpus);

console.log(spellcheck.getCorrections('soemthing', 1)); 
console.log(spellcheck.getCorrections('soething', 1));
console.log(spellcheck.getCorrections('soemtime', 2));

const spell = exports.module;