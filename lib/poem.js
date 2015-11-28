var rita = require('rita');
var lexicon = new rita.RiLexicon();
var words = require('./words').wordTypes;
var poem

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function sample(array){
  return array[Math.floor(Math.random()*array.length)];
};

function tab(){
  return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
};

// poem += "from " + sample(word.brands) +  " and " + …

function renderPoem(){
  poem += "I am from " + lexicon.randomWord('nns', 2) + ",\n";
  poem += "from " + sample(words.brands).capitalize() + " and " + lexicon.randomWord('nn', 6) + ".\n";
  poem += "I am from the " + lexicon.randomWord('nn', 1) + " under the " + sample(words.rooms) + ".\n";
  poem += "(" + sample(words.colors).capitalize() + ", " + lexicon.randomWord('jj', 3) + ",\n";
  poem += "it " + sample(words.senseWords) + " like " + sample(words.foods) + ".)\n\n";
  poem += "I am from the " + sample(words.treeAdjectives) + " " + sample(words.trees) + "\n";
  poem += "the " + sample(words.treeAdjectives) + " " + sample(words.treeAdjectives) + " " + sample(words.trees) + "\n";
  poem += "whose " + lexicon.randomWord('jj', 2) + " " + lexicon.randomWord('nns', 1) + " I remember\n";
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
  poem += "holding " + lexicon.randomWord('jj', 1) + " " + lexicon.randomWord('nns', 2) + ",\n";
  poem += "a sift of lost faces\n";
  poem += "to drift " + sample(words.prepositions) + " my dreams.\n";
  poem += "I am from those moments--\n";
  poem += lexicon.randomWord('vbd', 2) + " before I " + lexicon.randomWord('vbd', 2) + "--\n";
  poem += lexicon.randomWord('nn', 1) + "-" + lexicon.randomWord('v') + " from the " + lexicon.randomWord('nns', 3) + " tree.\n\n";
  return poem;
}

console.log("Where I'm From\n\n")
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
console.log(renderPoem())
