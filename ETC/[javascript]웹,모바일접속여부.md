###1.모바일 여부만 체크
```javascript
<script type="text/javascript">
var filter = "win16|win32|win64|mac";
 
if(navigator.platform){
  if(0 > filter.indexOf(navigator.platform.toLowerCase())){
    console.log("Mobile");
  }else{
    console.log("PC");
  }
}
</script>
```

###2.모바일 기종 체크
```javascript
<script type="text/javascript">
var mobileArr = new Array("iPhone", "iPod", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "SonyEricsson");
for(var txt in mobileArr){
    if(navigator.userAgent.match(mobileArr[txt]) != null){
        // 작업
        break;
    }
}
</script>
```

###3.웹 브라우져 종류 체크
```javascript
<script type="text/javascript">
var browser = navigator.userAgent.toLowerCase();
if(-1 != browser.indexOf("chrome")){
  console.log("chrome");
}
if(-1 != browser.indexOf("msie")){
  console.log("msie");
}
if(-1 != browser.indexOf("opera")){
  console.log("opera");
}
</script>	
```
