## 간단한 HTML 템플릿과 이 템플릿에 값을 전달하는 template() 함수 

javascript 에서 자바의 stringformat과 유사하게 사용

```javascript
// “My name is {0}, age {1}”.format(“aney”, “22”)
	if (!String.prototype.format) {
	  String.prototype.format = function() {
	    var args = arguments;
	    return this.replace(/{(\d+)}/g, function(match, number) { 
	      return typeof args[number] != 'undefined'
	        ? args[number]
	        : match
	      ;
	    });
	  };
	}




// “My name is {0}, age {1}”.format(“aney”, “22”)
	if (!String.format) {
	  String.format = function(format) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return format.replace(/{(\d+)}/g, function(match, number) { 
	      return typeof args[number] != 'undefined'
	        ? args[number] 
	        : match
	      ;
	    });
	  };
	}
```

##ref
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

