/*Template String*/

const string = `${b}, my ${a} ${object.c}`;
// ` 백틱을 사용하여 문자열 템플릿 표현

var string2 = 'hello\nworld!';

const string3 = `hello
world!`;
/*
hello
world!
*/

const string4 = `I'm Aney`;
const string5 = `"I don't know you"`;

/* Class */

class Human {
	constructor(type = 'human') {
		this.type = type;
	}
	static isHuman(human) {
		return human instanceof Human;
	}
	breath() {
		alert('h-a-a-a-m');
	}
}

class Aney extends Human {
	constructor(type, firstName, lastName) {
		super(type);
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayName() {
		super.sayName();
	}

	breath() {
		super.breath();
	}
}

const newAney = new Aney('human', 'Aney', 'Kim');
Human.isHuman(newAney);	//true

//객체의 prototype에 정의했던 메소드들도 이제 class 안에 넣는다.
// cf. 
Human.prototype.breathe = function() {
  alert('h-a-a-a-m');
};

/* 객체 해체 */
const obj2 = {
  h: 'Eich',
  i: {
    j: 'Jay'
  }
}
const { h, i: {j}, k } = obj2;
console.log(h, j, k); // 'Eich', 'Jay', undefined

//매개 변수 해체
const destruct = ({ value: x }) => {
  console.log(x);
};
destruct({value: 3}); // 3