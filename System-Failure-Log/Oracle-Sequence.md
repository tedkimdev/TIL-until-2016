##EXAMPLE 번호 채번

```
SELECT TO_CHAR(SYSDATE, 'YYMMDD') || LTRIM(TO_CHAR(EXAMPLE_SQ01.NEXTVAL, '000000')) AS EXAMPLE_NO
  FROM DUAL
;
```

시퀀스 MAXVALUE 99999999 : 8자리

EXAMPLE 번호 채번

EX) SYSDATE+999999

- 20161012+999999 -> 20161012+###### 발생

- 해당 EXAMPLE_NO 가지고 DB INSERT 시도하면서, PK 오류 발생

- 20161012###### 중복으로 인한 PK 오류 발생(무결성 제약 조건)



###원인

- MAXVALUE 가 8자리 였는데, TO_CHAR 에서 6자리로 가져옴.

- 오라클 TO_CHAR는 자리수가 넘어가면 ######를 결과값으로 가져와서 문제가 발생

- 999999-> 1000000 부터 위 SELECT 문에서 'SYSDATE+######' 가 결과로 나옴.


###조치

- 시퀀스 자리수와 TO_CHAR 자리수 맞춰줘서 해결
