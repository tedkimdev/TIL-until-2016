#Identifier

##Scope Chain
 - 식별자 중 어떤 객체(전역 객체가 아닌)의 속성(propety)이 아닌 식별자를 찾아내는 메커니즘
```javascript
function A() {
    var a = 1;
    function B() {
        function C() {
            // C 함수 안에서 a를 선언한 적이 없지만,
            // 함수 A 안에서 선언된 a에 접근할 수 있다.
            console.log(a);  // 1
        }
        C();
    }
    B();
}
A();
```
##Prototype Chain
 - 식별자 중, 어떤 객체의 속성(property)을 찾아내는 메커니즘
```javascript
var aneyObj = {
    prop1: 'value1',
    prop2: 'value2'
};

/* 
*  obj에 hasOwnProperty라는 메서드를 정의한 적 없지만,
*  프로토타입 체인을 따라 상속 체계 위로 찾아 올라가서,
*  Object.prototype.hasOwnProperty에 접근
*/
console.log(obj.hasOwnProperty('prop1'));  // true
```

