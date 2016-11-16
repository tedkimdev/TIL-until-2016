#thymeleaf

###0. Bean values

```
th:text="${class.bean}"

<dd th:text="${product.description}">Red chair</dd>

<dd th:text="${product.description}"/>
```

###1. Simple format
```
<dd th:text="${#numbers.formatDecimal(product.price, 1, 2)}">350</dd> 

<dd th:text="${#dates.format(product.availableFrom, 'dd-MMM-yyyy')}">28-Jun-2013</dd>
```


### prototype(퍼블리싱 작업된 html) 에 템플릿 작성하기 쉬워 보인다.
