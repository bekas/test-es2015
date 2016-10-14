"use strict";

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var arr = [1, 2, 3];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _getIterator(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var a = _step.value;

    console.log(a);
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

var range = _defineProperty({
  from: 1,
  to: 5
}, _Symbol$iterator, function () {
  var current = this.from;
  var last = this.to;
  return {
    next: function next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true,
          value: current
        };
      }
    }
  };
});

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = _getIterator(range), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var num = _step2.value;

    console.log(num);
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
//# sourceMappingURL=iter.js.map