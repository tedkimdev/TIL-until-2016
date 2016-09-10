#Symbol

* ES5 primitive data
  * string, number, boolean, null, undefined

* primitive 는 wrapper 오브젝트가 있습니다.
  * string: String
  * number: Number
  * boolean: Boolean
  * symbol: Symbol(ES6)
  * undefined, null은 wrapper 오브젝트가 없습니다.
  * wrapper 오브젝트에는 메소드가 있습니다.

**Symbol**은 프로그램 전체를 통해 **unique한 값**을 제공

```
let sym = Symbol('value');
```
new Symbol()과 new 연산자 사용 불가

Symbol()은 값을 반환하므로 값을 생성한다는 표현이 적합

생성한 Symbol 값 변경 불가, 프로퍼티 설정 불가

strict mode 에서 에러 발생

```
const sym = Symbol();
console.log(sym);			// Symbol()
console.log(typeof sym);	// symbol

const symRemark = Symbol('comment');
console.log('symRemark');	// Symbol(comment)

let sym = Symbol();
let result = sym === Symbol(); //false
```
**Symbol()**은 **unique한 값** 리턴

```
let sym = Symbol('123');
const obj = Object(sym);

let result = obj === sym; //false
    result = obj == sym;  //true
```

###symbol-keyed property
Object 프로퍼티 이름으로 사용

#### for-in
  - 프로퍼티 이름으로 Symbol이 열거되지 않음
  - Symbol is [[Enumerable]]: false
  - Object.getOwnPropertySymbols()로 열거
  
프로퍼티 이름으로 심볼 값 사용
```
let sym = Symbol();
let obj = {[sym]: "Aney"};

console.log(obj);	// Object {Symbol():Aney}

let result = obj[sym];
console.log(result);	//Aney

result = obj.sym;		//undefined
```
[sym] : symbol-keyed property

Object 프로퍼티 키 타입이 String 이지만, Symbol 은 문자열이 아님.

obj.sym 같이 dot 사용 불가


```
const symbolOne = Symbol('symbol one');
const symbolTwo = Symbol('symbol two');

class Sports {
	static [symbolOne]() {
		return 'symbol-1';
	}

	[symboleTwo]() {
		return 'symbol-2';
	}
}

Sports[symbolOne]();
obj[symboleTwo]();
```

#####JSON.stringify() 오브젝트 키가 심볼이면, 빈오브젝트 리턴
```JSON.stringify({[sym]: 'Aney'});```

