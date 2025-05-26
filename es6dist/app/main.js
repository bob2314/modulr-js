"use strict";

var _randomDog = require("./util/randomDog");
console.log('load randomCat from /util/randomDog.js in src/app/main js', _randomDog.randomDog);
console.log('Now load an async function from the helper', _randomDog.randomDog.loadADog());