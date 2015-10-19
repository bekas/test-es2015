'use strict';

var greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

var a = greetings[0];
var b = greetings[1];
var c = greetings.slice(2);

console.log(a);
console.log(b);
console.log(c);

function func() {
    for (var _len = arguments.length, c = Array(_len), _key = 0; _key < _len; _key++) {
        c[_key] = arguments[_key];
    }

    console.log(c);
}

func(10, 12);
//# sourceMappingURL=array.js.map