# 4. First steps with ECMAScript 6
## var에서 let/const로

```javascript
var x = 3;
function func(randomize) {
    if (randomize) {
        var x = Math.random(); // (A) scope: 전체 함수
        return x;
    }
    return x; // A줄의 x에 접근
}
func(false); // undefined
```

```javascript
let x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
func(false); // 3
```

##IIFE (Immediately-Invoked Function Expression) -> Block
```javascript
(function () {  // 열기 IIFE
    var tmp = 'Aney';
}());  // 닫기 IIFE

console.log(tmp); // ReferenceError
```

```javascript
{
    let tmp = 'Aney';
}
console.log(tmp); // ReferenceError
```

##templete literals
- string interpolation via template literals
- ES6에서 템플릿 리터럴을 통해 문자 보간을 사용
```javascript
function printCoord(x, y) {
    console.log(`(${x}, ${y})`);//cf) '('+x+', '+y+')'
}
```

- Multi-line strings via template literals
```javascript
const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;
```

##arrow functions
```javascript
function UiComponent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('click');
        this.handleClick(); //(A)
    });
}

const arr = [1, 2, 3];
const squares = arr.map(x => x * x);
```

##Handling multiple return values
- ES5
```javascript
var matchObj =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3]
```
- ES6
```javascript
const [, year, month, day] = 
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
```

##Multiple return values via objects
ES5에서 객체의 하나의 프로퍼티만 필요해도, 중간 변수(아래의 예제 propDesc)가 필요하다.:
```javascript
var obj = { foo: 123 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); // true true
```
In ES6, use destructuring:
```javascript
const obj = { foo: 123 };

const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); // true true
```
{writable, configurable} 는 { writable: writable, configurable: configurable } 의 약어 이다.

###for-of
```javascript
for(const elem of ['a', 'b', 'c']) {
    console.log(elem);
}

for(const [index, elem] of ['a', 'b', 'c'].entries()) {
    console.log(index+'. '+elem);
}
```

##Handling named parameters, Making the parameter optional
- ES5
```javascript
function selectEntries(options) {
    options = options || {}; // (A)
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    ···
}
```
- ES6
```javascript
function selectEntries({ start=0, end=-1, step=1 } = {}) {
    ···
}
```
