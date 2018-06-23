// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr1 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr1[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f)
{
	return f(startArr)
};

//alert (each().length);

var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

//тесты

let assert = require('chai').assert;

describe('проверка sum', function(){
	it('Проверка функции sum, должен быть тип true', function(){
		assert.typeOf(sum(), 'false');
	});
});

describe('проверка перем num', function(){
		it('num должна быть равна 5', function(){
			assert.equal(num, 5);
		})
});


describe('Проверка each', function(){
	it('each тип данных', function(){
		assert.typeOf(each(), 'function');
	});

	describe('Проверка each', function(){
		assert.equal(each().length, 0);
	});
	
});