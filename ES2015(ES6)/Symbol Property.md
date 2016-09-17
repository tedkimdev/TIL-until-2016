#Symbol Property

###Well-Known Symbols
	- @@iterator 형태 -> "Symbol.iterator"
	- @@ 는 스펙에서 사용
	- 11개의 Well-Known Symbols

###toStringTag
  - Symbol.toStringTag
  - [object Object] -> 'ABC' 지정 하였으면, [object ABC]
	
	
```javascript
let Sports = function(){};
let sportsObj = new Sports;

let type = sportsObj.toString();
console.log(type);      	//[object Object]

Sports.prototype[Symbol.toStringTag] = 'Aney-Function';
let result = sportsObj.toString();
console.log(result);      //[object Aney-Function]
```
```javascript
class Sports {
	get [Symbol.toStringTag](){
		return 'Sports-Class';
	}
}
let obj = new Sports();
let result = obj.toString();
console.log(result);	// [object Sports Class]
```

###isConcatSpreadable
  - Array.prototype.concat() 배열의 펼침 여부 정의

```javascript	
/* array */
let one = [1, 2, 3],
two = [4, 5, 6];

arrayName[Symbol.isConcatSpreadable] = false
one.concat(two);	// [ 1, 2, 3, [4,5,6] ]  length : 4
//two 배열의 엘리먼트가 아닌 배열 자체를 연결
```
```javascript
let one = [1, 2, 3];

/* arrayLike */
let fiveSix = {
	0:'five', 1:'six', length:2
};
result = one.concat(fiveSix);
//[1,2,3, ['five', 'six']]

let fiveSix = {
	[Symbole.isConcatSpreadable]: true,
	0:'five', 1:'six', length:2
};
result = one.concat(fiveSix);
//[1,2,3, 'five', 'six']

```

##unscopables
  - Symbol.unscopables true
    - with문이 프로퍼티를 전개 하지 않음





