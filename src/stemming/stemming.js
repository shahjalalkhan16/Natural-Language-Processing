const natural = require("natural");

console.log(
  natural.PorterStemmer.tokenizeAndStem(
    "You can see porter Stemmer in tokenizer stem"
  )
);
console.log(
  natural.LancasterStemmer.tokenizeAndStem(
    "You can see lancaster Stemmer in tokenizer stem"
  )
);
var stemming;
exports.module = stemming;
