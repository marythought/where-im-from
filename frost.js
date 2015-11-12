var express = require('express');
var app = express();
// var poem = require('./frostPoem').runPoem;

var rita = require('rita');
var lexicon = new rita.RiLexicon();
var colors = require('./lib/colors').Colors;
// var rs = new rita.RiString(poem());
// word_array = rs.words();

function replaceLike(word){
  var similar = lexicon.similarByLetter(word);
  similar.push(word);
  return similar[Math.floor(Math.random()*similar.length)];
};

function renderPoem(){
  var roads = replaceLike("roads")
  var diverged = replaceLike("diverged")
  var wood = replaceLike("wood")
  var way = replaceLike("way")
  var poem = "Two " + roads + " " + diverged + " in a " + replaceLike("yellow") + " " + wood + ",\n"
  poem += "And " + replaceLike("sorry") + " I could not " + replaceLike("travel") + " " + replaceLike("both") + "\n"
  poem += "And be one " + replaceLike("traveler") + ", " + replaceLike("long") + " I " + replaceLike("stood") + "\n"
  poem += "And " + replaceLike("looked") + " " + replaceLike("down") + " one as far as I " + replaceLike("could") + "\n"
  poem += "To where it " + replaceLike("bent") + " in the " + replaceLike("undergrowth") + ";\n"
  poem += "\n"
  poem += "Then " + replaceLike("took") + " the " + replaceLike("other") + ", as just as " + replaceLike("fair") + ",\n"
  poem += "And " + replaceLike("having") + " perhaps the " + replaceLike("better") + " " + replaceLike("claim") + "\n"
  poem += "Because it was " + replaceLike("grassy") + " and wanted " + replaceLike("wear") + ",\n"
  poem += "" + replaceLike("Though") + " as for " + replaceLike("that") + " the " + replaceLike("passing") + " there\n"
  poem += "Had " + replaceLike("worn") + " them " + replaceLike("really") + " about the " + replaceLike("same") + ",\n"
  poem += "\n"
  poem += "And " + replaceLike("both") + " that " + replaceLike("morning") + " " + replaceLike("equally") + " " + replaceLike("lay") + "\n"
  poem += "In " + replaceLike("leaves") + " no " + replaceLike("step") + " had " + replaceLike("trodden") + " " + replaceLike("black") + ".\n"
  poem += "" + replaceLike("Oh").toUpperCase() + ", I " + replaceLike("kept") + " the " + replaceLike("first") + " for another " + replaceLike("day") + "!\n"
  poem += "Yet " + replaceLike("knowing") + " how " + way + " " + replaceLike("leads") + " on to " + way + "\n"
  poem += "I " + replaceLike("doubted") + " if I " + replaceLike("should") + " ever " + replaceLike("come") + " " + replaceLike("back") + ".\n"
  poem += "\n"
  poem += "I " + replaceLike("shall") + " be " + replaceLike("telling") + " " + replaceLike("this") + " with a " + replaceLike("sigh") + "\n"
  poem += "" + replaceLike("somewhere") + " " + replaceLike("ages") + " and " + replaceLike("ages") + " hence:\n"
  poem += "Two " + roads + " " + diverged + " in a " + wood + ", and I,\n"
  poem += "I " + replaceLike("took") + " the " + replaceLike("one") + " less " + replaceLike("traveled") + " " + replaceLike("by") + ",\n"
  poem += "And that has " + replaceLike("made") + " all the " + replaceLike("difference") + "."
  console.log(poem)
};

renderPoem();

