'use strict'

function* generateSequence1() {
  yield 1;
  yield 2; 
  return 3;
}

let generator1 = generateSequence1();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3;
}

let generator2 = generateSequence2();

for(let value of generator2) {
  console.log(value); 
}

function* generateSequence3(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

  // 0..9
  yield* generateSequence3(48, 57);

  // A..Z
  yield* generateSequence3(65, 90);

  // a..z
  yield* generateSequence3(97, 122);

}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

console.log(str); 


function* gen() {
  let ask1 = yield "2 + 2?";

  console.log(ask1); 

  let ask2 = yield "3 * 3?"

  console.log(ask2); 
}

let generator = gen();

console.log( generator.next().value ); 

console.log( generator.next(4).value );

console.log( generator.next(9).done ); 