#Thymeleaf 예제

###1. js 비교 연산자
 - 자바스크립트에서 사용시 [[CDATA]] 로 묶어준다.

```javascript
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">

...

<script type="text/javascript">
function checkLevel() {
	var value = $("#level").val();
	/*<![CDATA[*/
	if (value > 100) {
		alert("value > 100");
		return;
	}
  /*]]>*/
}

</body>
</html>
```

###2. if/else
```javascript
<td th:if="${} != 0" th:text="${}"></td>
<td th:unless="${} != 0">0</td>
```

###3. ? operator
```javascript
<td th:text="${data.buyTime} ? ${customformat(data.buyTime)} : '0'" ></td>
```

###4. switch/case
```javascript
<td th:switch="${data.type}">
  <span th:case="1" class="center-block label label-info">case 1</span>
  <span th:case="2" class="center-block label label-primary">case 2</span>
  <span th:case="3" class="center-block label label-warning">case 3</span>
</td>
```

###5. select
 - 컨트롤러에서 List<ObjectData> 를 생성해서 model.addAttribute("objectList", objectList) 형태로 전달한 경우

```javascript
<div class="row">
	<label class="label col col-2">item Info</label>
	<div class="col col-10">
		<label class="select"> 
		  <select class="select" name="itemId" id="itemId">
				<option value="0">ALL</option>
				<option th:each="objectData : ${objectList}" th:value="${objectData.id}" th:text="${objectData.id} + ' : ' + ${objectData.name}"></option>
		  </select>
		</label>
  </div>
</div>
```
- 컨트롤러에서 Map<Integer, ObjectData>으로 전달하는 경우(model.addAttribute("objectMap", objectMap))
```javascript
<select class="select" name="itemId" id="itemId">
  <option value="0">ALL</option>
  <option th:each="objectData : ${objectMap}" th:value="${objectData.key}" th:text="${objectData.key} + ' : ' + ${objectData.value.name}"></option>
</select>
```

###6. table
```javascript
<tr th:if="${not #lists.isEmpty(datas)}" th:each="data : ${datas}">
	<td>
		<a data-toggle="modal" href="#dataModal" class="btn btn-xs btn-default" th:onclick="|javascript:changePopup('${data.seq}')|"> 
			<i class="fa fa-times"></i>
		</a>
	</td>
	<td th:text="${data.seq}" ></td>
	<td th:text="${data.type}" ></td>
	<td th:text="${data.itemId} + ':' + ${itemDataMap.get(data.itemId)}" ></td>
	<td th:text="${data.text}" ></td>
</tr>
```

###7. a href
- <a> 로 다른 페이지로 이동할 경우
```javascript
<td th:if="${data.num != 0}">
  <a href="/user/list?id=" th:attrappend="href=${data.id}" th:text="${id.num}"></a>
</td>
```

- 파라미터가 여러개(multil) 일 경우
```javascript
<td th:if="${data.num != 0}">
  <a th:href="@{/user/list(id=${data.id},nick=${data.nick})}" th:text="${data.num}"></a>
</td>
```
