"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var marked0$0 = [generateSequence1, generateSequence2, generateSequence3, generateAlphaNum, gen].map(_regeneratorRuntime.mark);
function generateSequence1() {
  return _regeneratorRuntime.wrap(function generateSequence1$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return 1;

      case 2:
        context$1$0.next = 4;
        return 2;

      case 4:
        return context$1$0.abrupt("return", 3);

      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

var generator1 = generateSequence1();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

function generateSequence2() {
  return _regeneratorRuntime.wrap(function generateSequence2$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return 1;

      case 2:
        context$1$0.next = 4;
        return 2;

      case 4:
        context$1$0.next = 6;
        return 3;

      case 6:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[1], this);
}

var generator2 = generateSequence2();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _getIterator(generator2), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"]) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function generateSequence3(start, end) {
  var i;
  return _regeneratorRuntime.wrap(function generateSequence3$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = start;

      case 1:
        if (!(i <= end)) {
          context$1$0.next = 7;
          break;
        }

        context$1$0.next = 4;
        return i;

      case 4:
        i++;
        context$1$0.next = 1;
        break;

      case 7:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[2], this);
}

function generateAlphaNum() {
  return _regeneratorRuntime.wrap(function generateAlphaNum$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(generateSequence3(48, 57), "t0", 1);

      case 1:
        return context$1$0.delegateYield(generateSequence3(65, 90), "t1", 2);

      case 2:
        return context$1$0.delegateYield(generateSequence3(97, 122), "t2", 3);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[3], this);
}

var str = '';

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = _getIterator(generateAlphaNum()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var code = _step2.value;

    str += String.fromCharCode(code);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

console.log(str);

function gen() {
  var ask1, ask2;
  return _regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return "2 + 2?";

      case 2:
        ask1 = context$1$0.sent;

        console.log(ask1);

        context$1$0.next = 6;
        return "3 * 3?";

      case 6:
        ask2 = context$1$0.sent;

        console.log(ask2);

      case 8:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[4], this);
}

var generator = gen();

console.log(generator.next().value);

console.log(generator.next(4).value);

console.log(generator.next(9).done);

// 0..9

// A..Z

// a..z
//# sourceMappingURL=generators.js.map