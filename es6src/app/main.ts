import { randomDog } from './util/randomDog';

console.log(
  'load randomCat from /util/randomDog.js in src/app/main js',
  randomDog,
);

console.log('Now load an async function from the helper', randomDog.loadADog());
