const natural = require('natural');
const nounInflector = new natural.NounInflector();
const countInflector = natural.CountInflector;
const verbInflector = new natural.PresentVerbInflector();


// const input = prompt();
console.log(nounInflector.pluralize('circulars'));
console.log(nounInflector.singularize('deers'));

console.log(countInflector.nth(5));

console.log(verbInflector.pluralize('goes'));
//console.log(verbInflector.pluralize(input));

const infector = exports.module