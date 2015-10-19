'use strict';

var name = 'Name!!!';
var user = { name: name };
var newUser = {};

var helloUser = {
    __proto__: user,
    helo: function helo() {
        console.log('hello ');
    }
};
//# sourceMappingURL=obj.js.map