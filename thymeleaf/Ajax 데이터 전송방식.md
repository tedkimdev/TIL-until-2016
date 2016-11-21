#Ajax 통신 데이터 전송하는 형식

###1. CSV 형식
- , 로 데이터 속성을 나누고 줄바꿈으로 데이터를 표시
```
name, id, part
ANEY, 00aney, IT
anyone, anyId, HR
```

###2. XML 형식
<entries>  
    <entry name="ANEY" id="00aney">
        <part>
            IT
        </part>
    </entry>
    <entry name="anyone" id="anyId">
        <part>
            HR
        </part>
    </entry>
</entries>  

###3. JSON 형식
```
[{
"name": "ANEY",
"id": "00aney",
"part": "IT"
},
{
"term": "anyone",
"part": "anyId",
"definition": "HR"
}]
```


###4. 데이터 전송 방식
- GET : 지정한 URI의 데이터를 열람하기 위한 메소드
- POST : 지정한 URI에 데이터를 생성하기 위한 메소드
- PUT : 지정한 URI의 데이터를 갱신하기 위한 메소드
- DELETE : 지정한 URI의 데이터를 삭제하기 위한 메소드
- HEAD : 지정한 URI의 헤더 정보를 요청하는 메소드

   - GET방식의 경우 데이터를 단순히 읽어 오는 경우에 쓰이며, 개인정보가 URL에 노출될 땐, POST방식을 사용
   - POST방식의 경우 데이터를 생성,수정,삭제 하는 경우(PUT,DELETE의 역할까지).
     데이터를 변경하는 경우에 사용되는 방식
   
