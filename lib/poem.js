var rita = require('rita');
var lexicon = new rita.RiLexicon();
var rm = new rita.RiMarkov(2);
var words = require('./words').wordTypes;
var poem

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function sample(array){
  return array[Math.floor(Math.random() * array.length)];
};

function randomNumber(topLimit){
  return Math.floor(Math.random() * topLimit);
}

function wordCount(string){
  return string.split(" ").length;
};

function runMarkov(text, num){
  var rmark = new rita.RiMarkov(2);
  rmark.loadText(text);
  var sentences = rmark.generateSentences(num);
  return sentences
};

function renderPoem(){
  var poem = "I am from " + lexicon.randomWord('nns', 2) + ",\n";
  poem += "from " + sample(words.brands).capitalize() + " and " + lexicon.randomWord('nn', 6) + ".\n";
  poem += "I am from the " + lexicon.randomWord('nn', 1) + " " + sample(words.prepositions) + " the " + sample(words.rooms) + ".\n";
  poem += "(" + sample(words.colors).capitalize() + ", " + lexicon.randomWord('jj', 3) + ",\n";
  poem += "it " + sample(words.senseWords) + " like " + sample(words.foods) + ".)\n\n";
  poem += "I am from the " + sample(words.treeAdjectives) + " " + sample(words.trees) + "\n";
  poem += "the " + sample(words.treeAdjectives) + " " + sample(words.treeAdjectives) + " " + sample(words.trees) + "\n";
  poem += "whose " + lexicon.randomWord('jj', 2) + " " + lexicon.randomWord('nns', 1) + " I " + lexicon.randomWord('vbd', 3) + "\n";
  poem += "as if they were my own.\n";
  poem += "\n";
  poem += "I'm from " + sample(words.foods) + " and " + lexicon.randomWord('nns', 3) + ",\n";
  poem += "          from " + sample(words.names) + " and " + sample(words.names) +".\n";
  poem += "I'm from the " + sample(words.cliques) +"\n";
  poem += "          and the " + sample(words.cliques) + ",\n";
  poem += "from '" + sample(words.interjections) + "' and '" + sample(words.interjections) + "'!\n";
  poem += "I'm from '" + sample(words.quotes) + "'\n";
  poem += "          '" + sample(words.quotes) + "'\n";
  poem += "          and " + lexicon.randomWord('cd') + " " + sample(words.writings) + " I can say myself.\n";
  poem += "\n";
  poem += "I'm from " + sample(words.cities) + " and " + sample(words.cities) + ",\n";
  poem += sample(words.cookingWords) + " " + sample(words.foods) + " and " + sample(words.drinkAdjectives) + " " + sample(words.drinks) + ".\n";
  poem += "From the " + sample(words.bodyParts) + " my " + sample(words.relatives) + " " + lexicon.randomWord('vbd', 1) + "\n";
  poem += "          " + sample(words.hurts) + ",\n";
  poem += "the " + sample(words.animals) + " my " + sample(words.relatives) + " " + lexicon.randomWord('vbd', 1) + " to keep their " + sample(words.senseNouns) + ".\n";
  poem += "\n";
  poem += sample(words.prepositions).capitalize() + " my " + sample(words.furniture) + " was a " + lexicon.randomWord('jj', 1) + " box\n";
  poem += lexicon.randomWord('vbg', 2) + " " + lexicon.randomWord('jj', 1) + " " + lexicon.randomWord('nns', 2) + ",\n";
  poem += "a sift of " + lexicon.randomWord('jj', 1) + " faces\n";
  poem += "to " + lexicon.randomWord('vb', 1) + " " + sample(words.prepositions) + " my " + lexicon.randomWord('nns', 1) +".\n";
  poem += "I am from those " + lexicon.randomWord('nns', 2) + "--\n";
  poem += lexicon.randomWord('vbd', 2) + " before I " + lexicon.randomWord('vbd', 2) + "--\n";
  poem += lexicon.randomWord('nn', 1) + "-" + lexicon.randomWord('vb', 1) + " from the " + lexicon.randomWord('nns', 3) + " tree.\n\n";
  return poem;
}

var sourcetext = "";

while (wordCount(sourcetext) < 50000) {
  var poem = renderPoem();
  sourcetext += poem;
}
rm.loadText(sourcetext);
var globalSentences = rm.generateSentences(5000);
// console.log(text)
// console.log(wordCount(text));

var text = "Where I'm From\n\n";

while (wordCount(text) < 50000) {
  // add poem
  poem = renderPoem();
  text += poem;
  // add random markoved lines
  for (var i = 0; i < randomNumber(40); i++) {
    text += sample(globalSentences);
    text += "\n";
  }
  // add random poem lines
  poem = renderPoem().split("\n");
  for (var i = 0; i < randomNumber(20); i++) {
    text += sample(poem);
    text += "\n";
  }
  // add random markoved lines
  for (var i = 0; i < randomNumber(40); i++) {
    text += sample(globalSentences);
    text += "\n";
  }
  // start over
}

console.log(text);
console.log(wordCount(text));

