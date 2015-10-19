"use strict";

var _Promise = require("babel-runtime/core-js/promise")["default"];

var promise1 = new _Promise(function (resolve, reject) {
	setTimeout(function () {
		reject(new Error("время вышло!"));
	}, 1000);
});

promise1.then(function (result) {
	return console.log("Fulfilled: " + result);
}, function (error) {
	return console.log("Rejected: " + error.message);
});

var promise2 = new _Promise(function (resolve, reject) {
	throw new Error("o_O");
});

promise2["catch"](console.log);

var promise3 = new _Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('first');
	}, 1000);
});

promise3.then(function (result) {
	console.log(result);
	return new _Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(result + '-second');
		}, 1000);
	});
}).then(function (result) {
	console.log(result);
	return result + '-third';
}).then(function (result) {
	console.log(result);
	throw new Error(result + ' error');
})["catch"](function (error) {
	console.log(error);
});

/*
Promise.all
Promise.race

Promise.resolve
Promise.reject
*/
//# sourceMappingURL=promise.js.map