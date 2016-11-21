#Ajax&JSON

###1.response 객체에 문자열 담기

HttpServletResponse 객체에 문자열 담기
- Servlet 기반 프레임워크에서 사용가능

```javascript
$("#elementId").bind("click",function(){
    $.ajax({
        url : contextPath+"requestURL",
        type: "POST",
        data : { "id" : $("#id").val(),
		    name : $("#name").val(),
		    /*...*/
		 },
        success : function(responseData){
            $("#targetId").remove();
            var data = JSON.parse(responseData);
            if(!data){
                alert("존재하지 않는 ID입니다");
                return false;
            }
            var html = '';
            html += '<form class="form-signin" action="" id="targetId">';
            html += '이름<input type="text" class="form-control"  name="name" value="'+data.name+'">';
            html += '아이디<input type="text" class="form-control" name=id" value="'+data.id+'">';
	          /*...*/
            html += '</form>';
            $("#container").after(html);
        }
    });
});
```

```java
//Controller
@RequestMapping(value= "requestURL", method=RequestMethod.POST)
public void AjaxView(  
        @RequestParam("id") String id,
         ... ,
        HttpServletResponse response)  {
    String personJson;

    SocialPerson person = personRepository.findById(id);
    if(person != null){
        personJson = "{\"id\":\""+person.getId()
                    +"\",\"name\":\""+person.getName()
                    +"\",\"password\":\""+person.getPassword()
                    +"\",\"email\":\""+person.getEmail()+"\"}";
    }
    else{
        personJson = "null";
    }
    try {
        response.getWriter().print(personJson);
    } catch (IOException e) {
        e.printStackTrace();
    }   
}
```

###2.@ResponseBody
메소드 return 형 앞에 @ResponseBody 붙여서 사용.
해당 객체가 자동으로 Json객체로 변환되어 반환

1. jackson-mapper-asl 라이브러리 추가
```
<dependency>  
       <groupId>org.codehaus.jackson</groupId>
       <artifactId>jackson-mapper-asl</artifactId>
       <version>버전</version>
</dependency>  
```

servlet xml에 아래와 같이 어노테이션을 설정해줍니다.
```
<annotation-driven />  
```

```java
//Controller
@RequestMapping(value= "/~", method=RequestMethod.POST)
public @ResponseBody SocialPerson AjaxView(  
        @RequestParam("id") String id)  {

    SocialPerson person = personRepository.findById(id);
    return person;
}
```





