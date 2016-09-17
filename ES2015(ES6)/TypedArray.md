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

###BYTES_PER_ELEMENT
```javascript
let twoObj = new Int16Array(bufferObj, 4, 2);
// 4바이트 떨어진 5번 째 위치부터 4(2*2)바이트를 사용

console.log(oneObj.BYTES_PER_ELEMENT);	// 2
```

###Buffer

###byteOffset
```javascript
let twoObj = new Int16Array(bufferObj, 4, 2);
// 4바이트 떨어진 5번 째 위치부터 4(2*2)바이트를 사용

console.log(twoObj.byteOffset);			// 4
```

###from()
  - TypedArray.from() , static method

```javascript
let oneObj = Uint8Array.from([12,34]);
console.log(oneObj);
//{0: 12} {1: 34}

let twoObj = Uint8Array.from('12');
console.log(twoObj);
//{0: 1} {1: 2}


let threeObj = Uint8Array.from('56', (value)=>{
	console.log(value);
	return value;
}, this);
//5, 6

let fourObj = Uint8Array.from({length: 3}, (value, key)=>key);
console.log(fourObj);
//{0:0} {1:1} {2:2}
```

###of()
  - TypedArray.of() , static method

```javascript
let oneObj = Uint8Array.of(10);
console.log(oneObj);
//{0: 10}

let twoObj = Uint8Array.of(20, 30, 40);
console.log(twoObj);
//{0: 20} {1: 30} {2: 40}
```

###set()
```javascript
let bufferObj = new ArrayBuffer(6);
let uint8Obj = new Uint8Array(bufferObj);

uint8Obj.set([10, 20, 30], 2);
//3번 째부터 [10, 20, 30] set

console.log(uint8Obj);
/*
{0: 0}
{1: 0}
{2: 10}
{3: 20}
{4: 30}
{5: 0}
*/
```

###subarray()
  - ArrayBuffer 데이터를 복사하여 반환

###Symbol.iterator()
```javascript
let uint8Obj = new Uint8Array([10, 20]);
let iteratorObj = uint8Obj[Symbol.iterator]();

iteratorObj.next();
```

###copyWithin()
  - 같은 TypedArray 에서 범위 값을 사용하여 지정한 위치에 설정
  - Array.prototype.copyWithin() 과 같음

##structure 구조체
  - 다른 데이터 타입을 하나로 묶어 놓은 상태
  - TypedArray로 구조체를 만들 수 있음.
  - {key:value}는 구조체와 형태에서 차이 있음

```javascript
/*
품명코드 : Uint8(1*10)
품명 : Uint16(2*10), 수량 : Uint16(2*1)
단가 : Uint16(2*1), 금액 : Uint32(4*1)
*/

let itemObj = {code:'book', desc:'자바스크립트',
				qty:1, price:20, amount:200};

let bufferObj = new Arraybuffer(40);
//전체 바이트 40 인스턴스 생성

let codeObj = new Uint8Array(bufferObj, 0, 10);
// 품명 코드를 저장하기 위한 인스턴스
// 숫자와 대소문자 사용 가능
// 숫자와 영문값이 255보다 작으므로 Uint8타입 인스턴스에 저장 가능
// ArrayBuffer의 0번부터 1바이트 10개 사용

for (var k = 0; k < itemObj.code.length; k++) {
	codeObj.set([itemObj.code.charCodeAt(k)], k);
};
//ArrayBuffer 에 바이너리 값을 설정해야함.
//itemObj.code 값 'book'를 한씩 유니코드로 변환
//전체 10바이트 중 앞에 4바이트만 값이 설정, 나머지는 0으로 설정됨.


let descObj = new Uint16Array(bufferObj, 10, 10);
// 풍명을 저장하기 위한 인스턴스
// 한글은 유니코드 2바이트 사용
// 10번 인덱스부터 2바이트 단위로 10개이므로 20바이트 사용

for (var k = 0; k < itemObj.desc.length; k++) {
	descObj.set([itemObj.desc.charCodeAt(k)], k);
};

let qtyObj = new Uint16Array(bufferObj, 30, 1);
qtyObj.set([itemObj.qty]);
// 수량을 저장하기 위한 인스턴스
// 음수가 없다고 가정, 품명코드(10)과 품명(20)이 30바이트 사용하므로
// 30번 인덱스부터 2바이트 1개 사용

let priceObj = new Uint16Array(bufferObj, 32, 1);
priceObj.set([itemObj.price]);
//가격을 저장하기 위한 인스턴스

let amountObj = new Uint32Array(bufferObj, 36, 1);
amountObj.set([itemObj.amount]);
// 금액을 저장하기 위한 인스턴스 생성
// 바로 앞 단가의 offset 단위를 맞추어야 함.
// 36부터 인 이유는.. 2byte boundary 에 맞아야 하기 때문에..
// 34를 4로 나누면 2가 남아 4바이트 단위에 맞지 않음.. => 에러 발생
// 그래서 인스턴스 총 바이트 수도 40
// 가운데 2바이트가 비어있는 상태

/* print */

let result =  [];

for (var k = 0; k < itemObj.code.length; k++) {
	result.push(String.fromCharCode(codeObj[k]));
}

for (var k = 0; k < itemObj.desc.length; k++) {
	result.push(String.fromCharCode(descObj[k]));
}

result.push(qtyObj[0]);
result.push(priceObj[0]);
result.push(amountObj[0]);

console.log(result.join(''));
//book자바스크립트120200
```
