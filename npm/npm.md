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

##package.json 파일에 스크립트 등록
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
