#DataView
  - ArrayBuffer view 방법(TypedArray 도 가능)
  - getter, setter 제공
  - Endian 지정 가능

###new DataView()
  - ArrayBuffer 데이터 view(CRUD)를 위한 인스턴스
  - view 구간만 지정, view 타입은 메소드로 지정

```javascript
let bufferObj = new ArrayBuffer(16);

let viewObj = new DataView(bufferObj);
// ArrayBuffer 전체가 DataView 대상
// 2번째 파라미터는 오프셋, 3번째 파라미터는 사용할 바이트 수

console.dir(viewObj);

let viewObj2 = new DataView(bufferObj, 4, 10);
//오프셋 값 4, 사용할 바이트수 10

result = viewObj2.byteOffset; //4
result = viewObj2.byteLength; //10
```

###Endian
  - 메모리에 데이터 배치하는 방식
  - Byte Order
  - Big-endian , Little-endian , Mixed-Endian

  - 메모리에 데이터 배치 형태
    - 10진수로 305,419,896은 16진수로 12,345,678
    - Big-endian    : 0x12 0x34 0x56 0x78
    - Little-endian : 0x78 0x56 0x34 0x12
    - Mixed-Endian  : 0x34 0x12 0x78 0x56
  - OS, CPU, 컴퓨터에 따라 엔디언이 다름.

###getInt8()
  - DataView 인스턴스 기준으로 8비트 단위로 인덱스 번째 값을 리턴
```javascript
let bufferObj = new ArrayBuffer(4);

let int8Obj = new int8Array(bufferObj);

int8Obj.set([10, 20, 30]);	//TypedArray로 값 설정

let viewObj = new DataView(bufferObj);

for(let k = 0; k < viewObj.byteLength; k++){
	var result = viewObj.getInt8(k);
	console.log(result);
}
/*
10
20
30
0
*/
```
###setInt8(offset, value)
  - DataView 인스턴스 기준으로 오프셋을 바이트로 지정
  - 16 바이트 부터는 엔디언 설정이 있음.

###setInt16(offset, value, boolean)
  - 3번째 파라미터 false, undefined 면 Big-endian
  - true 가 Little-endian

###getInt16(offset, boolean)
  - 2번째 파라미터 false, undefined 면 Big-endian
  - true 가 Little-endian
