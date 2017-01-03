# [spring 3.1] flashMap 리다이렉트시 값 전달

### 주는 쪽
```java
FlashMap flashMap = RequestContextUtils.getOutputFlashMap(request);
flashMap.put("paramaterName", paramaterName);
return "redirect:url";
```

### 받는 쪽

```java
//리다이렉트 된 페이지 에서 flashMap 선언
Map<String, ?> flashMap = RequestContextUtils.getInputFlashMap(request);

if(flashMap !=null) {  
     model.addAttribute("loginFailCnt", flashMap.get("loginFailCnt"));
}
```
