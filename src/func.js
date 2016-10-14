'use strict' 

let sum = (x,y) => x + y;

console.log(sum(1,2));
console.log(sum.name);

module.exports.sum = sum;
//export let sum = (x,y) => x + y;