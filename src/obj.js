let name = 'Name!!!';
let user = {name};
let newUser = {};

let helloUser = {
    __proto__: user,
    helo(){
        console.log('hello ');    
    }
}