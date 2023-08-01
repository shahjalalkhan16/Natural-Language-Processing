const natural = require('natural');
const metaphone = natural.Metaphone;
const soundEx = natural.SoundEx;

const wordA = 'phonetics';
const wordB = 'fonetix';

if(metaphone.compare(wordA, wordB)){
    console.log("The sound alike!")
}
console.log(metaphone.process('phonetics'));

const phonetics = exports.module