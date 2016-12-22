

##Simple formatting
```
<dd th:text="${#numbers.formatDecimal(product.price, 3, 2)}">XXX</dd>

<dd th:text="${#dates.format(product.availableFrom)}">XXX</dd>
```
##String concantenation
```
<dd th:text="${'$'+#numbers.formatDecimal(product.price, 3, 2)}">XXX</dd>
```
##Escaped text, Unescaped text

escaped text
```
<div th:text="${html}">
```
unescaped text
```
<div th:utext="${html}">
```
##Iteration
```
<tbody th:remove="all-but-first">
  <tr th:each="product : ${productList}">
    <td th:text="${product.description}">Red chair</td>
    <td th:text="${'$' + #numbers.formatDecimal(product.price, 1, 2)}">$350</td>
    <td th:text="${#dates.format(product.availableFrom, 'dd-MMM-yyyy')}">28-Jun-2013</td>
  </tr>
</tbody>
```
##Iteration stats
```
<td th:text="${productStat.count}">1</td>
```
##Conditions(if)
```
<span th:if="${product.price lt 100}" class="offer">Special offer!</span>
```
