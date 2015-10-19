'use strict';

var a = 1;
for (var _i = 0; _i < 2; _i++) {
	var y = 0;
	var _x = 1;
	{
		var _z = _x2;
		var _x2 = _z;
	}
	console.log('test - ' + _x + '-' + 'i');
}

try {
	y;
	a;
	x;
} catch (e) {
	console.log(e);
}

try {
	i;
} catch (e) {
	console.log(e);
}

try {
	z;
} catch (e) {
	console.log(e);
}

var _loop = function (_i2) {
	setTimeout(function () {
		console.log(_i2);
	}, 0);
};

for (var _i2 = 0; _i2 < 10; _i2++) {
	_loop(_i2);
}
//# sourceMappingURL=let.js.map