var rita = require('rita');
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
var hurts = require('./waysToGetHurt').Hurts

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var lexicon = new rita.RiLexicon();

var pluralNoun = lexicon.randomWord('nns', 2)
var sixSylNoun = lexicon.randomWord('nn', 6)
var twosylpropernoun = lexicon.randomWord('nnp')
var noun4 = lexicon.randomWord('nn', 1)
var room = rooms[Math.floor(Math.random()*rooms.length)]
var color = colors[Math.floor(Math.random()*colors.length)]
var adjective = lexicon.randomWord('jj', 3)
var senseWord = senseWords[Math.floor(Math.random()*senseWords.length)]
var food = foods[Math.floor(Math.random()*foods.length)]
var tree1 = trees.First[Math.floor(Math.random()*trees.First.length)] + " " + trees.Second[Math.floor(Math.random()*trees.Second.length)]
var tree2 = trees.First[Math.floor(Math.random()*trees.First.length)] + " " + trees.First[Math.floor(Math.random()*trees.First.length)] + " " + trees.Second[Math.floor(Math.random()*trees.Second.length)]
var food2 = foods[Math.floor(Math.random()*foods.length)]
var noun2 = lexicon.randomWord('nns', 3)
var adjective3 = lexicon.randomWord('jj', 2)
var noun3 = lexicon.randomWord('nns', 1)
var name1 = names[Math.floor(Math.random()*names.length)]
var name2 = names[Math.floor(Math.random()*names.length)]
var clique1 = cliques[Math.floor(Math.random()*cliques.length)]
var clique2 = cliques[Math.floor(Math.random()*cliques.length)]
var interjection1 = interjections[Math.floor(Math.random()*interjections.length)]
var interjection2 = interjections[Math.floor(Math.random()*interjections.length)]
var quote = quotes[Math.floor(Math.random()*quotes.length)]
var adjective2 = lexicon.randomWord('jj', 3)
var animal = animals[Math.floor(Math.random()*animals.length)]
var number = lexicon.randomWord('cd')
var writing = writings[Math.floor(Math.random()*writings.length)]
var city1 = cities[Math.floor(Math.random()*cities.length)]
var city2 = cities[Math.floor(Math.random()*cities.length)]
var cookingWord = cookingWords[Math.floor(Math.random()*cookingWords.length)]
var food3 = foods[Math.floor(Math.random()*foods.length)]
var drinkAdjective = drinkAdjectives[Math.floor(Math.random()*drinkAdjectives.length)]
var drink = drinks[Math.floor(Math.random()*drinks.length)]
var bodyPart1 = bodyParts[Math.floor(Math.random()*bodyParts.length)]
var bodyPart2 = bodyParts[Math.floor(Math.random()*bodyParts.length)]
var relative1 = relatives[Math.floor(Math.random()*relatives.length)]
var relative2 = relatives[Math.floor(Math.random()*relatives.length)]
var ed_verb3 = lexicon.randomWord('vbd', 1)
var wayToGetHurt = hurts[Math.floor(Math.random()*hurts.length)]
var ed_verb4 = lexicon.randomWord('vbd', 1)
// sense_noun = [sight, hearing, touch, smell]
var preposition = lexicon.randomWord('in')
// furniture =
// ing_noun =
var pluralNoun2 = lexicon.randomWord('nns', 2)
// ed_verb =
// ed_verb2 =
// reverie_word = [dreams, wishes, prayers, thoughts]


var poem = ""
poem += "I am from " + pluralNoun + ",\n"
poem += "from " + twosylpropernoun.capitalize() + " and " + sixSylNoun + ".\n"
poem += "I am from the " + noun4 + " under the " + room + ".\n"
poem += "(" + color.capitalize() + ", " + adjective + ",\n"
poem += "it " + senseWord + " like " + food + ".)\n"
poem += "I am from the " + tree1 + "\n"
poem += "the " + tree2 + "\n"
poem += "whose " + adjective3 + " " + noun3 + " I remember\n"
poem += "as if they were my own.\n"
poem += "\n"
poem += "I'm from " + food2 + " and " + noun2 + ",\n"
poem += "from " + name1 + " and " + name2 +",\n"
poem += "I'm from the " + clique1 +"\n"
poem += "and the " + clique2 + ",\n"
poem += "from '" + interjection1 + "' and '" + interjection2 + "'!\n"
poem += "I'm from '" + quote + "'\n"
poem += "with a " + adjective2 + " " + animal + "\n"
poem += "and " + number + " " + writing + " I can say myself.\n"
poem += "\n"
poem += "I'm from " + city1 + " and " + city2 + ",\n"
poem += cookingWord + " " + food3 + " and " + drinkAdjective + " " + drink + ".\n"
poem += "From the " + bodyPart1 + " my " + relative1 + " " + ed_verb4 + "\n"
poem += wayToGetHurt + "\n"
poem += "the " + bodyPart2 + " my " + relative2 + " " + ed_verb3 + " to keep their #{sense_noun}.\n"

// "#{preposition} my #{furniture} was a dress box
// #{ing_noun} old {plural_noun},
// a sift of lost faces
// to drift beneath my #{reverie_word}.
// I am from those moments--
// #{ed_verb} before I #{ed_verb2} --
// leaf-fall from the family tree."

console.log(poem);
