const natural = require("natural");
var classifier = new natural.BayesClassifier();
classifier.addDocument("i am long qqqq", "buy");
classifier.addDocument("buy the q's", "buy");
classifier.addDocument("short gold", "sell");
classifier.addDocument("sell gold", "sell");

classifier.train();

console.log(classifier.classify("i am short silver"));
console.log(classifier.getClassifications("sell gold"));

// const natural = require('natural')
// const classifier = new natural.BayesClassifier()

// classifier.addDocument('my unit-tests failed.', 'software')
// classifier.addDocument('tried the program, but it was buggy.', 'software')
// classifier.addDocument('the drive has a 2TB capacity.', 'hardware')
// classifier.addDocument('i need a new power supply.', 'hardware')

// classifier.train()

// classifier.save('classifier.json', function (err, classifier) {
//   if (err) {
//     console.log(err)
//   }
//   // the classifier is saved to the classifier.json file!
// })

const classification = exports.module;
