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
