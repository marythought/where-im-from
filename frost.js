var express = require('express');
var app = express();
var poem = require('./frostPoem').runPoem;

var rita = require('rita');
var lexicon = new rita.RiLexicon();

var rs = new rita.RiString(poem());
word_array = rs.words();

function replaceText(){
  var text = "";
  for (i = 0; i < word_array.length; i++) {
    similar = lexicon.similarBySoundAndLetter(word_array[i]);
    similar.push(word_array[i]) * 5;
    text += similar[Math.floor(Math.random()*similar.length)];
    text += " ";
    if (i % 7 === 0){
      text += "\n";
    }
  }
  return text;
};

function renderPoem(){
  console.log(replaceText());
};

renderPoem();

