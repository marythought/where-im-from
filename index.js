var express = require('express');
var app = express();

var rita = require('rita');
var lexicon = new rita.RiLexicon();
var brands = require('./lib/brands').Brands;
var interjections = require('./lib/interjections').Interjections;
var colors = require('./lib/colors').Colors;
var rooms = require('./lib/rooms').Rooms;
var senseWords = ["tasted", "smelled", "sounded", "felt", "looked"]
var foods = require('./lib/foods').Foods;
var animals = require('./lib/animals').Animals;
var trees = require('./lib/trees');
var names = require('./lib/names').Names;
var cliques = require('./lib/cliques').Cliques;
var quotes = require('./lib/shortQuotes').Quotes;
var writings = require('./lib/writingForms').WritingForms;
var cities = require('./lib/cities').Cities;
var cookingWords = require('./lib/cookingWords').CookingWords;
var drinkAdjectives = require('./lib/drinkAdjectives').DrinkAdjectives;
var drinks = require('./lib/drinks').Drinks;
var bodyParts = require('./lib/body').BodyParts;
var relatives = require('./lib/relatives').Relatives;
var hurts = require('./lib/waysToGetHurt').Hurts;
var furniture = require('./lib/furniture').Furniture;
var senseNouns = ["sight", "hearing", "touch", "smell", "taste"];
var prepositions = require('./lib/prepositions').Prepositions
var poem

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function renderPoem(){
  var number = lexicon.randomWord('cd')
  var pluralNoun = lexicon.randomWord('nns', 2)
  var sixSylNoun = lexicon.randomWord('nn', 6)
  var noun2 = lexicon.randomWord('nns', 3)
  var noun3 = lexicon.randomWord('nns', 1)
  var noun4 = lexicon.randomWord('nn', 1)
  var ingNoun = lexicon.randomWord('vbg', 2)
  var pluralNoun2 = lexicon.randomWord('nns', 2)
  var adjective = lexicon.randomWord('jj', 3)
  var adjective2 = lexicon.randomWord('jj', 3)
  var adjective3 = lexicon.randomWord('jj', 2)
  var adjective4 = lexicon.randomWord('jj', 1)
  var adjective5 = lexicon.randomWord('jj', 1)
  var edVerb1 = lexicon.randomWord('vbd', 2)
  var edVerb2 = lexicon.randomWord('vbd', 2)
  var edVerb3 = lexicon.randomWord('vbd', 1)
  var edVerb4 = lexicon.randomWord('vbd', 1)
  var animal = animals[Math.floor(Math.random()*animals.length)]
  var bodyPart1 = bodyParts[Math.floor(Math.random()*bodyParts.length)]
  var bodyPart2 = bodyParts[Math.floor(Math.random()*bodyParts.length)]
  var brand = brands[Math.floor(Math.random()*brands.length)]
  var city1 = cities[Math.floor(Math.random()*cities.length)]
  var city2 = cities[Math.floor(Math.random()*cities.length)]
  var clique1 = cliques[Math.floor(Math.random()*cliques.length)]
  var clique2 = cliques[Math.floor(Math.random()*cliques.length)]
  var color = colors[Math.floor(Math.random()*colors.length)]
  var cookingWord = cookingWords[Math.floor(Math.random()*cookingWords.length)]
  var drink = drinks[Math.floor(Math.random()*drinks.length)]
  var drinkAdjective = drinkAdjectives[Math.floor(Math.random()*drinkAdjectives.length)]
  var food = foods[Math.floor(Math.random()*foods.length)]
  var food2 = foods[Math.floor(Math.random()*foods.length)]
  var food3 = foods[Math.floor(Math.random()*foods.length)]
  var furniture1 = furniture[Math.floor(Math.random()*furniture.length)]
  var interjection1 = interjections[Math.floor(Math.random()*interjections.length)]
  var interjection2 = interjections[Math.floor(Math.random()*interjections.length)]
  var name1 = names[Math.floor(Math.random()*names.length)]
  var name2 = names[Math.floor(Math.random()*names.length)]
  var preposition = prepositions[Math.floor(Math.random()*prepositions.length)]
  var preposition2 = prepositions[Math.floor(Math.random()*prepositions.length)]
  var quote = quotes[Math.floor(Math.random()*quotes.length)]
  var quote2 = quotes[Math.floor(Math.random()*quotes.length)]
  var relative1 = relatives[Math.floor(Math.random()*relatives.length)]
  var relative2 = relatives[Math.floor(Math.random()*relatives.length)]
  var room = rooms[Math.floor(Math.random()*rooms.length)]
  var senseNoun = senseNouns[Math.floor(Math.random()*senseWords.length)]
  var senseWord = senseWords[Math.floor(Math.random()*senseWords.length)]
  var tree1 = trees.First[Math.floor(Math.random()*trees.First.length)] + " " + trees.Second[Math.floor(Math.random()*trees.Second.length)]
  var tree2 = trees.First[Math.floor(Math.random()*trees.First.length)] + " " + trees.First[Math.floor(Math.random()*trees.First.length)] + " " + trees.Second[Math.floor(Math.random()*trees.Second.length)]
  var wayToGetHurt = hurts[Math.floor(Math.random()*hurts.length)]
  var writing = writings[Math.floor(Math.random()*writings.length)]
  poem = "<h1>Where I'm From</h1>";
  poem += "<p>I am from " + pluralNoun + ",<br>";
  poem += "from " + brand.capitalize() + " and " + sixSylNoun + ".<br>";
  poem += "I am from the " + noun4 + " under the " + room + ".<br>";
  poem += "(" + color.capitalize() + ", " + adjective + ",<br>";
  poem += "it " + senseWord + " like " + food + ".)<br>";
  poem += "I am from the " + tree1 + "<br>";
  poem += "the " + tree2 + "<br>";
  poem += "whose " + adjective3 + " " + noun3 + " I remember<br>";
  poem += "as if they were my own.<br>";
  poem += "<br>";
  poem += "I'm from " + food2 + " and " + noun2 + ",<br>";
  poem += "from " + name1 + " and " + name2 +".<br>";
  poem += "I'm from the " + clique1 +"<br>";
  poem += "and the " + clique2 + ",<br>";
  poem += "from '" + interjection1 + "' and '" + interjection2 + "'!<br>";
  poem += "I'm from '" + quote + "'<br>";
  poem += "'" + quote2 + "'<br>";
  poem += "and " + number + " " + writing + " I can say myself.<br>";
  poem += "<br>";
  poem += "I'm from " + city1 + " and " + city2 + ",<br>";
  poem += cookingWord + " " + food3 + " and " + drinkAdjective + " " + drink + ".<br>";
  poem += "From the " + bodyPart1 + " my " + relative1 + " " + edVerb4 + "<br>";
  poem += wayToGetHurt + ",<br>";
  poem += "the " + bodyPart2 + " my " + relative2 + " " + edVerb3 + " to keep their " + senseNoun + ".<br>";
  poem += "<br>";
  poem += preposition.capitalize() + " my " + furniture1 + " was a " + adjective5 + " box<br>";
  poem += "holding " + adjective4 + " " + pluralNoun2 + ",<br>";
  poem += "a sift of lost faces<br>";
  poem += "to drift " + preposition2 + " my dreams.<br>";
  poem += "I am from those moments--<br>";
  poem += edVerb1 + " before I " + edVerb2 + "--<br>";
  poem += "leaf-fall from the family tree.<br></p>";
  poem += "<br><p> poem generator by <a href='http://www.marydickson.com'>Mary Dickson</a> based on the original";
  poem += " by <a href='http://www.georgeellalyon.com/where.html'>George Ella Lyon</a>."
  poem += " A project for <a href='https://github.com/dariusk/NaNoGenMo'>#NaNoGenMo."
  return poem;
}

app.get('/', function (req, res) {
  res.send(renderPoem());
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
