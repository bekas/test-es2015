'use strict';

var name = 'Name!!!';
var user = { name: name };
var newUser = {};

var helloUser = {
    __proto__: user,
    hello: function hello() {
        console.log('hello ');
    }
};
//# sourceMappingURL=obj.js.map