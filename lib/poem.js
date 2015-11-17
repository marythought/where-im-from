var rita = require('rita');
var lexicon = new rita.RiLexicon();

var text = require('./anneOfGreenGables').text;
var rm = new rita.RiMarkov(3);
rm.loadText(text);
var sentences = rm.generateSentences(10);
console.log(sentences)

// for (int i = 0; i < sentences.length; i++) {
//   println(sentences[i]);
// }

var brands = require('./brands').Brands;
var interjections = require('./interjections').Interjections;
var colors = require('./colors').Colors;
var rooms = require('./rooms').Rooms;
var senseWords = ["tasted", "smelled", "sounded", "felt", "looked"]
var foods = require('./foods').Foods;
var animals = require('./animals').Animals;
var trees = require('./trees');
var names = require('./names').Names;
var cliques = require('./cliques').Cliques;
var quotes = require('./shortQuotes').Quotes;
var writings = require('./writingForms').WritingForms;
var cities = require('./cities').Cities;
var cookingWords = require('./cookingWords').CookingWords;
var drinkAdjectives = require('./drinkAdjectives').DrinkAdjectives;
var drinks = require('./drinks').Drinks;
var bodyParts = require('./body').BodyParts;
var relatives = require('./relatives').Relatives;
var hurts = require('./waysToGetHurt').Hurts;
var furniture = require('./furniture').Furniture;
var senseNouns = ["sight", "hearing", "touch", "smell", "taste"];
var prepositions = require('./prepositions').Prepositions

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

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
// var snapped = lexicon.similarBySoundAndLetter('snapped');

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

var poem = "Where I'm From\n\n"
poem += "I am from " + pluralNoun + ",\n"
poem += "from " + brand.capitalize() + " and " + sixSylNoun + ".\n"
poem += "I am from the " + noun4 + " under the " + room + ".\n"
poem += "(" + color.capitalize() + ", " + adjective + ",\n"
poem += "it " + senseWord + " like " + food + ".)\n"
poem += "I am from the " + tree1 + "\n"
poem += "the " + tree2 + "\n"
poem += "whose " + adjective3 + " " + noun3 + " I remember\n"
poem += "as if they were my own.\n"
poem += "\n"
poem += "I'm from " + food2 + " and " + noun2 + ",\n"
poem += "from " + name1 + " and " + name2 +".\n"
poem += "I'm from the " + clique1 +"\n"
poem += "and the " + clique2 + ",\n"
poem += "from '" + interjection1 + "' and '" + interjection2 + "'!\n"
poem += "I'm from '" + quote + "'\n"
poem += "'" + quote2 + "'\n"
poem += "and " + number + " " + writing + " I can say myself.\n"
poem += "\n"
poem += "I'm from " + city1 + " and " + city2 + ",\n"
poem += cookingWord + " " + food3 + " and " + drinkAdjective + " " + drink + ".\n"
poem += "From the " + bodyPart1 + " my " + relative1 + " " + edVerb4 + "\n"
poem += wayToGetHurt + ",\n"
poem += "the " + bodyPart2 + " my " + relative2 + " " + edVerb3 + " to keep their " + senseNoun + ".\n"
poem += "\n"
poem += preposition.capitalize() + " my " + furniture1 + " was a " + adjective5 + " box\n"
poem += "holding " + adjective4 + " " + pluralNoun2 + ",\n",
poem += "a sift of lost faces\n"
poem += "to drift " + preposition2 + " my dreams.\n"
poem += "I am from those moments--\n"
poem += edVerb1 + " before I " + edVerb2 + "--\n"
poem += "leaf-fall from the family tree.\n"

// function print(text){
//   console.log(text)
// }

// print(poem)

// $('#runButton').on('click', function() {
//   $('#poem.p').text(print(poem));
// });


