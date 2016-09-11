#Array Buffer

###Typed Array
  - Typed Array: 단어를 띄우면 개념적인 접근
  - TypedArray : 하나의 다어로 포괄적인 오브젝트 이름
    - 배열 형태로 각 엘리먼트가 일정한 타입으로 구성
    - 각 엘리먼트 값을 바이너리로 표현
    - Typed Array 에서 바이트 수에 따른 타입
    - 배열 형태이지만, Array는 아니다.
    - Array.isArray() => false 리턴

  - 자바스크립트에서 배열은 엘리먼트 추가/삭제 용이
    - 반면, 배열 길이가 유동적이면 처리속도에 영향을 미침
  - Array 처리 메커니즘
    - 배열의 길이가 조정되는 것을 최소화 하기 위해
    엘리먼트를 삭제하면 그 위치에 undefined 설정
    - 배열을 읽을 때 undefined 설정된 엘리먼트 제외

  - 메모리 측면에서 자바스크립트 단점
    - 64비트를 사용하므로 필요 이상의 메모리 차지
    - 숫자 1은 1바이트면 충분
    - 작은 데이터는 문제가 없지만
    - 이미지 같은 청크(chunk) 데이터는 문제가 된다.

  - Typed Array 필요성
    - 배열 길이가 변하지 않는 형태 필요
    - 숫자 1 표현에 바이너리로 1바이트 사용
    - 값을 메모리에 설정하려면 바이너리로 변환 필요
    - 처음부터 바이너리로 저장하므로 변환 처리 불필요

  - Typed Array 출현 배경
    - 처음 WebGL 에서 스펙 작성, 현재는 ES6로 통합
  - Typed Array를 사용하는 Web API
    - FileReader.prototype.readAsArrayBuffer()
    - XMLHttpRequest.prototype.send()
    - Canvas의 ImageData.data

  - Typed Array 구현 요소
    - Buffer, View 개념과 같이 구현
    - Buffer : 메모리에 마이너리로 데이터 저장
    - View : Buffer 데이터 CRUD 기준 정의
    - view 바이트 단위, 시작/끝 위치

```javascript
let bufferObj = new ArrayBuffer(20);
// 파라미터에 지정한 20 바이트의 버퍼 오브젝트 생성

let int32View = new Int32Array(bufferObj);
// 파라미터에 지정한 bufferObj를 32비트(4바이트) 단위로 view(CRUD) 정의
// 20 바이트 / 4바이트 = 5 => 다섯 개의 값을 view할 수 있다.
```

###ArrayBuffer
  - 길이가 고정된 바이너리 버퍼 오브젝트
    - new ArrayBuffer() 인스턴스 생성
    - 생성한 인스턴스의 길이 변경 불가
  - ArrayBuffer 에 직접 접근 불가
    - TypedArray or DataView를 사용하여 접근,
      ArrayBuffer의 타입 지정(8비트, 16비트, 32비트 등)
    - ArrayBuffer 의 엘리먼트 구조(structure) 정의

####new ArrayBuffer()
  - 인스턴스에 내부 슬롯 설정
    - [[ArrayBufferData]], [[ArrayBufferByteLength]]

####byteLength 

####slice()
  - ArrayBuffer 인스턴스에서 지정한 범위 복사

####Symbol.species

####isView()
  - TypedArray or DataView 여부 리턴
```javascript
let bufferObj = new ArrayBuffer(20);
console.log(bufferObj.byteLength);
let twoObj = newBuffer.slice(3, 7);

let result = ArrayBuffer.isView(bufferObj);	//false

let typedObj = new Int16Array();
result = ArrayBuffer.isView(typedObj);		//true

let viewObj = new DataView(bufferObj);
result = ArrayBuffer.isView(viewObj);		//true

//DataView 가 TypedArray보다 확장성 있음.
```
