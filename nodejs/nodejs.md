#Node.js

- Node.js는 코드를 실행할 수 있는 Javascript 런타임

##특징
 - 비동기 I/O처리, 이벤트 위주
 - 빠른 속도
 - 단일 쓰레드, 뛰어난 확장성
 - 노 버퍼링
 - 라이센스 : MIT
 
###다음과 같은 상황일 때 사용
- 입출력 多 어플리케이션
- 데이터 스트리밍 어플리케이션
- 데이터를 실시간으로 다루는 어플리케이션
- JSON API 어플리케이션
- 싱글페이지 어플리케이션

###CPU 사용률이 높은 어플리케이션은 사용을 권장하지 않음.

-----------------------------------------

##작업환경 설정
 - node 설치
 - 버전 확인
```
  npm --version && node --version
```
 - main.js 파일 생성
 
 ```javascript
 console.log("Hello, World!");
 ```
 
 - 실행
 ```
  node main.js
 ```

-----------------------

##Node.js Application 만들기
### #1 모듈 import
```javascript
var http = require("http");
```
### #2 서버 생성
- http 인스턴스를 사용하여 http.createServer() 메소드 실행
- listen 메소드를 사용하여 포트 8081 bind

```javascript
http.createServer(function(request, response) {
  /* http 헤더,
     http status: 200 : ok
     Content Type: text/plain
  */
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  /* Response Body 설정 */
  response.end("Hello World");
}).listen(8081);
```
### #3 서버 테스트
```javascript
var http = require("http");

http.createServer(function(request, response){
    /* 
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    /*  Response Body 설정  */
    response.end("Hello World\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");
```

```
$ node main.js
Server running at http://127.0.0.1:8081/
```
