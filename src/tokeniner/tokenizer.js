var natural = require("natural");
var tokenizer = new natural.WordTokenizer();

console.log(tokenizer.tokenize("Your cat run "));

console.log(tokenizer.tokenize("your dog has fleas."));

var mytoken;
exports.module = mytoken;
