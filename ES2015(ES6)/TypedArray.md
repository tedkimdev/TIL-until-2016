#TypedArray
  - TypedArray 오브젝트
    - ArrayBuffer 데이터를 Array-Like 형태로 view(CRUD)
    - 9 개 TypedArray 오브젝트를 초칭하는 스펙상의 오브젝트
      - Int8Array, Uint8Array, Uint8ClampedArray, 
      - Int16Array, Uint16Array, 
      - Int32Array, Uint32Array,
      - Float32Array, Float64Array 
    - 스펙에서 %TypedArray%로 표기
  - ArrayBufferView
    - 9 개 TypedArray 와 DataView 지칭
    - ES6 스펙에서는 사용하지 않음.
    - 표준화가 진행중인 W3C IDL에서 사용

  - ArrayBuffer 가 16바이트 일 때,
    - Uint8Array 는  1바이트 이므로 16개 값 설정
    - Uint16Array 는 2바이트 이므로 8개 값 설정
    - Uint32Array 는 4바이트 이므로 4개 값 설정
    - Float64Array 는 2 개 값 설정

  - TypedArray 오브젝트 프로퍼티 구분
    - Array 에 같은 이름의 프로퍼티는 없고,
    - Array 메소드와 이름이 같은 메소드가 있다.
    - Array에만 있는 메소드
      - concat(), pop(), push(), shift(), splice(), unshift()
    - 이외의 메소드는 TypedArray에도 있는데, 일부 기능이 다름.

###new TypedArray(number)
```javascript
let int16Obj = new Int16Array(3);
// Buffer 6바이트 쓰겠다.
// 2바이트 단위로 값을 저장하는 3개의 엘리먼트를 가진 인스턴스 생성
// 초기값 0, 2의 보수법으로 음수 표현
console.log(int16Obj);
/*
{0: 0}
{1: 0}
{2: 0}
*/

int16Obj[0] = 123;
int16Obj[1] = 456;
console.log(int16Obj);
/*
{0: 123}
{1: 456}
{2: 0}
*/

let result = int16Obj[0];
console.log(result);		//123

let emptyObj = new Int16Array();
console.log(emptyObj);		// Object{}
``` 

###new TypedArray(TypedArray)
  - 복사 받는 인스턴스가 작으면 값이 짤림.
```javascript
let int16Obj = new Int16Array(3);
int16Obj = 12345;

let int8CopyObj = new Int16Array(int16Obj);
console.log(int16CopyObj);
// 16에서 8타입으로 복사하므로 값이 짤림.
```

###new TypedArray(Object)
  - Object 에 따라서 설정하는 방법이 다름.

```javascript
let oneObj = new Int16Array([12, 34, 56]);
let result = oneObj.length;
console.log(result);		//3

let twoObj = new Int16Array('123');
// 문자열을 숫자 값으로 인식
result = twoObj.length;
console.log(result);		//123

let threeObj = new Int16Array('ABC');
result = threeObj.length;
console.log(result);		//0

let fourObj = new Int16Array({0: 12, 1: 34});
result = fourObj.length;
console.log(result);		//0

let fiveObj = new Int16Array({0: 12, 1: 34, length: 2});
result = fiveObj.length;
console.log(result);		//2
```

###new TypedArray(ArrayBuffer instance, byteOffset, length)
  - offset 인덱스부터 지정한 수의 엘리먼트로 인스턴스 생성

```javascript
let bufferObj = new ArrayBuffer(10);	//10 bytes
let oneObj = new Int16Array(bufferObj, 4);
console.log(oneObj.length);		// 3
// 6 bytes / 2 bytes => 3

let result = oneObj.byteLength;
console.log(result);			// 6


let twoObj = new Int16Array(bufferObj, 4, 2);
// 4바이트 떨어진 5번 째 위치부터 4(2*2)바이트를 사용

twoObj[1] = 22;
//ArrayBuffer에서 6 인덱스 2바이트에 값을 설정
```

###Overflow 예
```javascript
/* signed */
let bufferObj = new ArrayBuffer(1);
let int8Obj = new Int8Array(bufferObj);

[127, 128, 129].forEach((value)=>{
	int8Obj[0] = value;
	console.log(value, ': ', int8Obj[0]);
});
// 127: 127
// 128: -128
// 129: -127

/* unsgiend */
let uint8Obj = new Uint8Array(bufferObj);
[255, 256, 257].forEach((value)=>{
	uintObj[0] = value;
	console.log(value, ': ', uint8Obj[0]);
});
//255: 255
//256: 0
//257: 1

/* clamped  => color 값.. */
let clampedObj = new Uint8ClampedArray(bufferObj);
[255, 256, 257].forEach((value)=>{
	clampedObj[0] = value;
	console.log(value, ': ', clamped8Obj[0]);
});
//255: 255
//256: 255
//257: 255

```
