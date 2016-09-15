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
