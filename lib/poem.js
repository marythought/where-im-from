var rita = require('rita');
var interjections = require('./interjections').Interjections;
var colors = require('./colors').Colors;
var rooms = require('./rooms').Rooms;
var sense_words = ["tasted", "smelled", "sounded", "felt", "looked"]
var foods = require('./foods').Foods;
var animals = require('./animals').Animals;

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
var sense_word = sense_words[Math.floor(Math.random()*sense_words.length)]
var food = foods[Math.floor(Math.random()*foods.length)]
// bush =
// tree =
var food2 = foods[Math.floor(Math.random()*foods.length)]
var noun2 = lexicon.randomWord('nns', 3)
// name =
// name2 =
// nickname_plural =
// nickname_plural2 =
interjection1 = interjections[Math.floor(Math.random()*interjections.length)]
interjection2 = interjections[Math.floor(Math.random()*interjections.length)]
// famous_quote =
var adjective2 = lexicon.randomWord('jj', 3)
var animal = animals[Math.floor(Math.random()*animals.length)]
var number = lexicon.randomWord('cd')
// type_of_writing =
// town_name =
// town_name2 =
// cooking_word = [fried, flambeed, baked, boiled]
var food3 = foods[Math.floor(Math.random()*foods.length)]
// drink_adjective =
// drink =
// body_part =
// relative =
// relative2 =
// tool =
// body_part2 =
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
poem += "it " + sense_word + " like " + food + ".)\n"
// poem += "I am from the #{bush} bush"
// poem += "the #{tree}"
// poem += "whose long-gone limbs I remember"
// poem += "as if they were my own."
// poem +=
poem += "I'm from " + food2 + " and " + noun2 + ",\n"
// poem += "from #{name} and #{name2}."
// poem += "I'm from the #{nickname_plural}"
// poem += "and the #{nickname_plural2},"
poem += "from '" + interjection1 + "' and '" + interjection2 + "'!\n"
// poem += "I'm from '#{famous_quote}'"
poem += "with a " + adjective2 + " " + animal + "\n"
// poem += "and #{number} #{type_of_writing} I can say myself."

// "I'm from #{town_name} and #{town_name2},"
// "#{cooking_word} #{food3} and #{drink_adjective} #{drink}. "
// "From the #{body_part} my #{relative} lost
// to the #{tool},
// the #{body_part2} my #{relative2} shut to keep his #{sense_noun}."

// "#{preposition} my #{furniture} was a dress box
// #{ing_noun} old {plural_noun},
// a sift of lost faces
// to drift beneath my #{reverie_word}.
// I am from those moments--
// #{ed_verb} before I #{ed_verb2} --
// leaf-fall from the family tree."

console.log(poem);
