'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var Animal = (function () {
    function Animal(speed) {
        _classCallCheck(this, Animal);

        this.speed = speed;
    }

    _createClass(Animal, [{
        key: 'run',
        value: function run() {
            console.log('run: ' + this.speed);
        }
    }], [{
        key: 'say',
        value: function say() {
            console.log('Uuuuuuu');
        }
    }]);

    return Animal;
})();

var Cat = (function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(may, speed) {
        _classCallCheck(this, Cat);

        _get(Object.getPrototypeOf(Cat.prototype), 'constructor', this).call(this, speed);
        this.may = may;
    }

    _createClass(Cat, [{
        key: 'sayMay',
        value: function sayMay() {
            console.log('MAY: ' + this.may);
        }
    }, {
        key: 'run',
        value: function run() {
            console.log('i don`t want it!');
            _get(Object.getPrototypeOf(Cat.prototype), 'run', this).call(this);
        }
    }]);

    return Cat;
})(Animal);

var cat = new Cat('may may may', 5);
cat.run();
cat.sayMay();
Cat.say();
//# sourceMappingURL=oop.js.map