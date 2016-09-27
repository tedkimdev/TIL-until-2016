#NPM

 - NPMSearch 에서 탐색 가능한 Node.js 패키지/모듈 저장소
 - Node.js 패키지 설치 및 버전/ 호환성 관리를 해주는 커맨드라인 유틸리티
 

##노드 명령어 위치 확인
```
$ whice node
/usr/local/bin/node
```

##버전 확인
```
$ node --version
v6.6.0
$ npm --version
```

```
$ mkdir projectName
$ cd projectName
$ npm init
```

##실행
```
node app.js
```

##모듈 설치
```
$ npm install <Module Name>
```
##js에서 모듈 사용 
```javascript
var express = require('express');  //express 추가
```

##글로벌 모듈, 로컬 모듈
 - 로컬모드로 설치 : 프로젝트 디렉토리 안에 node_modules 에 설치하는 것을 의미
 - 글로벌 설치 : 시스템 디렉토리에 설치
   - /usr/lib/node_modules 에 설치됨.
   - 글로벌 모드로 설치하면, node 어플리케이션에서 바로 import 하지 못함.
     - npm link 명령어로 모듈을 불러옴.
```
$ npm install express -g
```

 - npm install, npm link
```
$ npm install -g express
$ cd [path]/project
$ npm link express
```

##package.json 파일에 스크립트 등록
 - 패키지의 속성을 정의
 - 프로젝트가 의존하는 모듈과 모듈버전의 정보가 있음.
```
{
  ...
  
  "main": "index.js",
  "scripts": {
    "start": "node app.js",
    "test": "node_modules/.bin/mocha api/**/*.spec.js"
  },
  
  ...
}
```

##npm 명령어로 실행

```
npm start
Server running at http://127.0.0.1:3000/
```

##Curl로 리퀘스트 보내기
```
curl -X GET '127.0.0.1:3000'
```
##또는 Postman으로 리퀘스트 보내기



##모듈 제거
```
$ npm uninstall express
```

##모듈 업데이트
```
$ npm update express
```

##모듈 검색
 - 오래걸리거나 에러가 나면, NPMSearch에서 검색
```
$ npm search express
```
