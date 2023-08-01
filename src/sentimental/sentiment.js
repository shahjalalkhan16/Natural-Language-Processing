// var natural = require('natural');
// var Analyzer = natural.SentimentAnalyzer;
// var stemmer = natural.PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "afinn");

// // getSentiment expects an array of strings
// console.log(analyzer.getSentiment(["I", "don't", "want", "to", "play", "with", "you"]));
const natural = require("natural");
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

console.log(
  analyzer.getSentiment([
    "I",
    "am",
    "so",
    "sad",
    "what",
    "can",
    "I",
    "do",
    "please",
    "give",
    "me",
    "some",
    "enjoyable",
    "things",
  ]) // indicates a relatively negative statement
);
const sentiment = exports.module;
