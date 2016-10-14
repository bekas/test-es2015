'use strict'

let name = 'Name!!!';
let user = { name };
let newUser = {};

let helloUser = {
    __proto__: user,
    hello(){
        console.log('hello ');    
    }
}