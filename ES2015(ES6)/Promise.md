#Promise
  - 자바스크립트는 기본적으로 동기 실행
    - 앞 코드 실행 완료 후, 다음 코드 실행
  - Promise:비동기 실행(처리)
    - XMLHttpRequest의 비동기 처리와 흐름이 같음.
  - 비동기 처리에 맞도록 코드 작성
    - Promise 오브젝트에서 비동기 처리 메커니즘 제공
  - DOM 스펙에서 JavaScript로 전환
    - DOM 에서도 사용 가능

```javascript
function check() {
	return new Promise(function(resolve, reject){
		resolve();
		console.log('resolve');
	});
};

check().then(function(){
	console.log('success');
}, function(){
	console.log('fail');
});
//resolve, reject에 각 function 바인드

console.log('end');

/*
 resolve
 end
 success
*/ 
```

##Promise 상태
  - 처리를 진행할 때마다
    - 현재 상태를 [[promiseState]]에 저장
  - 상태는 두 가지로 반드시 하나만 발생
    - pending, settled(fulfilled, rejected)

  - pending 상태에서 처리하는 것
    - new Promise() 인스턴스 생성
    - Promise 성공과 실패 핸들러 바인딩
  - Promise 처리의 성공, 실패는 알 수 없음.

  - settled 상태
    - pending 이 종료된 상태
    - fulfilled, rejected 로 구분
    - pending 에서 바인딩한 핸들러 호출

  - fulfilled : 성공
    - Promise 생성자 처리 성공을 나타냄
    - then()의 첫번째 핸들러 호출

  - rejectd : 실패 
    - Promise 생성자 처리 실패를 나타냄
    - then()의 두번째 핸들러 호출

###new Promise()
  - 파라미터
    - executor
    - new Promise(function(resolve, reject){...});

  - executor 파라미터
    - 첫 번째: 성공했을 때, 핸들러
    - 두 번째: 실패했을 때, 핸들러
```javascript
function check(param) {
	return new Promise(function(resolve, reject){
		if (param === 'ok') {
			resolve(param);
			console.log('resolve');
		} else {
			reject(param);
		}
	});
};

check('ok').then(function(param){
	/* resolve logic */
}, function(param){
	/* reject logic */
});

console.log('end');

// check('ok')를 호출하면 Promise 인스턴스를 반환하므로
// then()을 이어서 호출할 수 있지만, 아래로 이동,
// executor의 resolve , reject 함수 바인딩
// 콘솔에 end 출력 후, 비동기로 resolve() 실행
```

###then()
  - parameter
    - 첫 번째: 성공 상태일 때, 실행될 핸들러
    - 두 번째: 실패 상태일 때, 실행될 핸들러

  - fulfilled, rejected 파라미터
    - 첫번째만 파라미터로 받음.

  - 리턴 문 작성에 관계없이 Promise 인스턴스 리턴
  - 리턴 결과를 [[PromiseValue]]에 설정 가능
  - then().then() 형태에서 [[PromiseValue]] 값을 다음 then()파라미터 값으로 넘겨줌.

###catch()
  - reject handler 정의
  - then()의 두 번째 파라미터를 작성하지 않고, catch(param) 작성
  - 리턴 결과를 [[PromiseValue]]에 설정 가능
  - catch().then() 형태에서 [[PromiseValue]] 값을 다음 then()파라미터 값으로 넘겨줌.
```javascript
function check(param){
	return new Promise((resolve, reject)=>{
		param === 'ok'? resolve(param) : reject(param);
	});
}

check('fail').then((param)=>{
	console.log('success', param);
}).catch((param)=>{
	console.log('fail', param);
});
```

###resolve()
  - Promise 인스턴스를 fulfilled 상태로 변환하여 리턴
  - let obj = {then(resolve, reject){}} 형태

```javascript
let promiseObj = Promise.resolve(
	{sports: 'ssss', music: 'mmmm'}
);

promiseObj.then((param)=>{
	for( let name in param){
		console.log(name);
	}
});

Promise.resolve(
['sports', 'music']).then((param)=>{console.log(param)});
```

```javascript
let oneObj = Promise.resolve({
	then(fulfill, reject){
		fulfill('thenable');
	}
});

oneObj.then((value)=>console.log(value));
```

```javascript
let thenable = {
	then(resolve, reject){
		resolve('success');
		reject('error');
	}
}
// resolve, reject 둘 중 하나만 발생
// resolve, reject 순으로 작성해야 함.

let oneObj = Promise.resolve(thenable);

oneObj.then(
	(value)=>console.log(value),
	(value)=>console.log('실행되지 않음')
);
```

###reject()
  - Promise 인스턴스를 reject 상태로 반환하여 리턴

###all()
  - 하나라도 리젝트면 실행하지 않음.

###race()
