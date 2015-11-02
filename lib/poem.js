var rita = require('rita');
// var rs = rita.RiString("The elephant took a bite!");
// console.log(rs.features());

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var lexicon = new rita.RiLexicon();

var pluralNoun = lexicon.randomWord('nns', 2)
var sixSylNoun = lexicon.randomWord('nn', 6)
var twosylpropernoun = lexicon.randomWord('nnp')
// nature_scene =
// color =
// adjective =
// sense_word = [tasted, smelled, sounded, felt, looked]
// food =
// bush =
// tree =
// food2 =
// noun2 =
// name =
// name2 =
// nickname_plural =
// nickname_plural2 =
// admonision = #(ie sit down)
// admonision2 =
// famous_quote =
// adjective2 =
// animal =
// number =
// type_of_writing =
// town_name =
// town_name2 =
// cooking_word = [fried, flambeed, baked, boiled]
// food3 =
// drink_adjective =
// drink =
// body_part =
// relative =
// relative2 =
// tool =
// body_part2 =
// sense_noun = [sight, hearing, touch, smell]
// preposition =
// furniture =
// ing_noun =
// plural_noun =
// ed_verb =
// ed_verb2 =
// reverie_word = [dreams, wishes, prayers, thoughts]


var poem = ""
poem += "I am from " + pluralNoun + ",\n"
poem += "from " + twosylpropernoun.capitalize() + " and " + sixSylNoun + ".\n"
// poem += "I am from the #{nature_scene}."
// poem += "({color}, {adjective}, "
// poem += "it #{sense_word} like #{food}.) "
// poem += "I am from the #{bush} bush"
// poem += "the #{tree}"
// poem += "whose long-gone limbs I remember"
// poem += "as if they were my own."
// poem +=
// poem += "I'm from #{food2} and #{noun2},"
// poem += "from #{name} and #{name2}."
// poem += "I'm from the #{nickname_plural}"
// poem += "and the #{nickname_plural2},"
// poem += "from #{admonision} and #{admonision2}!"
// poem += "I'm from '#{famous_quote}'"
// poem += "with a #{adjective2} #{animal}"
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
