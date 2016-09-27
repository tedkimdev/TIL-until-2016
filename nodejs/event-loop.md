#Event Loop in Node.js

##Event-Dreiven Application
 - 이벤트 핸들링은 옵저버 패턴에 의해 작동

## events 모듈, Eventemitter 클래스
 - 이벤트와 이벤트핸들러를 bind

```javascript
var events = require('events'); //events 모듈 사용

var eventEmitter = new events.EventEmitter(); //EventEmitter 객체 생성

/* 이벤트 핸들러와 이벤트 연동 */
eventEmitter.on('eventName', eventHandler);
```
### 프로그램 안에서 이벤트 발생시키는 코드
```javascript
eventEmitter.emit('eventName');
```

###Example
```javascript
var events = require('events');

var eventEmitter = new events.EventEmitter();

//eventHandler
var connectHandler = function connected(){
  console.log("Connection Successful");
  
  eventEmitter.emit("data_received"); // event 발생
}

//event bind
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
  console.log("Data received");
});

//connection event 발생
eventEmitter.emit('connection');

console.log('end');
```
###결과
```
Connection Successful
Data Received
end
```
