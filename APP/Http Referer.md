# Webview/UIWebView Header에 HTTP Referer 추가

앱 개발 시, 웹뷰를 이용한 처리를 하게 되는데,
Native 화면에서 웹페이즈를 로드할 경우, Referer값 없이 페이지 요청을 한다.

Webview 띄울 때, key 부분만 수정하여 추가하여 Referer 값을 저장한다.


ex)iOS objective-C
```
NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:url];

[request addValue:@”정의된 URI” forHTTPHeaderField:@”Referer”];

[webView loadRequest:request];
```
#Platform Dectection - 웹에서 userAgent 체크
특정 디바이스에서 요청할 때, 다르게 처리하고 싶으면..

ex)
```javascript
if(navigator.userAgent.indexOf("Tizen") != -1){
    // This is Tizen platform
    if(navigator.userAgen.indexOf("TV") != -1){
        //This is Tizen TV
        if(navigator.userAgent.indexOf("sdk") != -1){
        // This is an emulator
            } else {
        // This is real device
                   }
    } 
    else {
    //This is Tizen but not TV
    }
}
else {
    // This is not Tizen platform.
}
```
