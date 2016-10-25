#\<script\> 태그에 src attribute에 variable 사용
###Use JS variable to set the src attribute for <script> tag

```javascript
<script type="text/javascript"> 
    var srcLink = "불러올 .js 파일 경로 or URL" + "다른 스트링값(예: API 키)";
    var scriptElement = document.createElement('script');
    scriptElement.src = JSLink;
    scriptElement.onload = OnceLoaded;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);

    function OnceLoaded() {
        // Once loaded, load other JS or CSS or call objects of version.js
    }
</script>
```
