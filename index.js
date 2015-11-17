var express = require('express');
var app = express();
var rita = require('rita');
var lexicon = new rita.RiLexicon();
var words = require('./lib/words').wordTypes;

var poem

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function sample(array){
  return array[Math.floor(Math.random()*array.length)];
};

// poem += "from " + sample(word.brands) +  " and " + …

function renderPoem(){
  poem = "<h1>Where I'm From</h1>";
  poem += "<p>I am from " + lexicon.randomWord('nns', 2) + ",<br>";
  poem += "from " + sample(words.brands).capitalize() + " and " + lexicon.randomWord('nn', 6) + ".<br>";
  poem += "I am from the " + lexicon.randomWord('nn', 1) + " under the " + sample(words.rooms) + ".<br>";
  poem += "(" + sample(words.colors).capitalize() + ", " + lexicon.randomWord('jj', 3) + ",<br>";
  poem += "it " + sample(words.senseWords) + " like " + sample(words.foods) + ".)<br>";
  poem += "I am from the " + sample(words.treeAdjectives) + " " + sample(words.trees) + "<br>";
  poem += "the " + sample(words.treeAdjectives) + " " + sample(words.treeAdjectives) + " " + sample(words.trees) + "<br>";
  poem += "whose " + lexicon.randomWord('jj', 2) + " " + lexicon.randomWord('nns', 1) + " I remember<br>";
  poem += "as if they were my own.<br>";
  poem += "<br>";
  poem += "I'm from " + sample(words.foods) + " and " + lexicon.randomWord('nns', 3) + ",<br>";
  poem += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from " + sample(words.names) + " and " + sample(words.names) +".<br>";
  poem += "I'm from the " + sample(words.cliques) +"<br>";
  poem += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and the " + sample(words.cliques) + ",<br>";
  poem += "from '" + sample(words.interjections) + "' and '" + sample(words.interjections) + "'!<br>";
  poem += "I'm from '" + sample(words.quotes) + "'<br>";
  poem += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'" + sample(words.quotes) + "'<br>";
  poem += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and " + lexicon.randomWord('cd') + " " + sample(words.writings) + " I can say myself.<br>";
  poem += "<br>";
  poem += "I'm from " + sample(words.cities) + " and " + sample(words.cities) + ",<br>";
  poem += sample(words.cookingWords) + " " + sample(words.foods) + " and " + sample(words.drinkAdjectives) + " " + sample(words.drinks) + ".<br>";
  poem += "From the " + sample(words.bodyParts) + " my " + sample(words.relatives) + " " + lexicon.randomWord('vbd', 1) + "<br>";
  poem += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + sample(words.hurts) + ",<br>";
  poem += "the " + sample(words.animals) + " my " + sample(words.relatives) + " " + lexicon.randomWord('vbd', 1) + " to keep their " + sample(words.senseNouns) + ".<br>";
  poem += "<br>";
  poem += sample(words.prepositions).capitalize() + " my " + sample(words.furniture) + " was a " + lexicon.randomWord('jj', 1) + " box<br>";
  poem += "holding " + lexicon.randomWord('jj', 1) + " " + lexicon.randomWord('nns', 2) + ",<br>";
  poem += "a sift of lost faces<br>";
  poem += "to drift " + sample(words.prepositions) + " my dreams.<br>";
  poem += "I am from those moments--<br>";
  poem += lexicon.randomWord('vbd', 2) + " before I " + lexicon.randomWord('vbd', 2) + "--<br>";
  poem += "leaf-fall from the family tree.<br></p>";
  poem += "<br><p> poem generator by <a href='http://www.marydickson.com'>Mary Dickson</a> based on the original";
  poem += " by <a href='http://www.georgeellalyon.com/where.html'>George Ella Lyon</a>."
  poem += " A project for <a href='https://github.com/dariusk/NaNoGenMo-2015'>#NaNoGenMo."
  return poem;
}

app.get('/', function (req, res) {
  res.send(renderPoem());
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
