##ajaxSubmit


* Form
```javascript
<form id="dataForm" method="post" action="./testAjax.html" onSubmit="return false;">
    <input type="hidden" name="f_data1" value="">
    <input type="hidden" name="f_data2" value="">
    <input type="hidden" name="f_data3" value="">
    <input type="hidden" name="f_data4" value="">
</form>

```

* Button
```javascript
<a href="#" id="ajaxSubmitBtn" >ajaxSubmit Call</a>
```

* javascript ajaxForm controll

```javascript
<script type="text/javascript">
 
var options = {
    beforeSubmit : "",
    success      : "",
    dataType     : 'json'
};    
 
$(function(){ 
   $("#ajaxSubmitBtn").click(function(e){
        e.preventDefault();
        apply();
    });
});
 
function apply()
{
    // ajaxSubmit Option  
    options = {
        beforeSubmit : applyBefore, // ajaxSubmit 전처리 함수
        success      : applyAfter,  // ajaxSubmit 후처리 함수
        dataType     : 'json'
    };
    // dataForm Form Data값을 testAjax.html 으로 ajax 전송
    
    
    /* ajaxSubmit # 1*/
    $("#dataForm").ajaxSubmit(options);
}
 
function applyBefore(formData, jqForm, options)
{        
   
    // ajaxSubmit 전 처리 작업 영역
 
    return true;
}
 
function applyAfter(objResponse, statusText, xhr, $form)
{
    if (statusText == "success") {
        // ajax 통신 성공 후 처리영역
        if (objResponse.strResult == "SUCCESS" ) {
            // 리턴받은 json 배열의 strResult 값이 "SUCCESS"일 경우 처리영역
        } else {
            // SUCCESS 이외의 값으로 리턴됐을 경우 처리영역
        }
    } else {
        // ajax 통신 실패 처리영역
    }    
}
</script>
```


##  ajaxSubmit # 2

```javascript
/* ajaxSubmit #2 */
function ajaxSubmit2() {
  $("#dataForm").ajaxSubmit({
    url: "...",
    dataType: "json",
    success: function(data) {

    }
    , error: function(xhr, status, error) {

    }
  }
};
```
