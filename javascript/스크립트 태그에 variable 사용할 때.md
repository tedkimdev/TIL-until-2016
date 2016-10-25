#\<script\> 태그에 src attribute에 variable 사용
###Use JS variable to set the src attribute for \<script\> tag


- 스테이지, 운영에 각각 다른 API키를 가지는 js 파일을 로드하고 싶을 때,
- document.URL 을 체크하여서 키값을 설정해주고, 스크립트를 불러오게 하면 된다.
- 운영에 스테이지용 API 키를 불러오면, 스크립트가 불러오지않고, 오류가 날 것이다.


예)
```javascript
<script type="text/javascript"> 
    /*
    * domain url check
    * set api key
    */
    
    var srcLink = "불러올 .js 파일 경로 or URL" + "다른 스트링값(예: API 키)";
    var scriptElement = document.createElement('script');
    scriptElement.src = srcLink;
    scriptElement.onload = OnceLoaded;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);

    function OnceLoaded() {
        // Once loaded, load other JS or CSS or call objects of version.js
    }
</script>
```
