/***************
* Previous code
****************/

var sayHello = function() {
	alert('Hello');
};

var a = 1;
var b = 'Oh';
var object = {
	sayGoodmorning: function() {
		alert('Good morning');
	},
	sayHello: sayHello
};

object[a + 3] = 'four';
object['say' + b] = fuction() {
	alert('Oh');
};

/***************
* ES2015 code
****************/

const newObject = {
	sayGoodmorning() {
		alert('good morning');
	},
	sayHello,
	[a + 3]: 'four', // 4: 'four'
	['say' + b]() {
		alert('Oh');
	}
};

/*
함수는 함수명(매개변수){내용} 로 바뀜.

sayHello 한번만 씀.
{data:data, result: result, object: object}->{data, result, object}
*/