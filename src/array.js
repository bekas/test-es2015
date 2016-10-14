'use strict'

const greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

let [a, b,...c] = greetings;
console.log(a);
console.log(b);
console.log(c);

function func(...c){
    console.log(c);
}

func(10, 12);