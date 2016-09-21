#JSX
 - javascript 파일에 HTML형식을 입력할 수 있다.
 - " ", ' ' 로 감싸지 않는다.
  - 가독성을 위해 () 를 사용한다.
 - react JSX는 XML 같은 문법을 native JavaScript 변경시켜준다.
 - Babel 에서 JSX Loader를 사용하여 JSX 형태 코드를 변환해준다.
 
## 1.Nested Element
 - 컴포넌트 안에 여러 Element를 렌더링할 때,
   Container element 안에 포함시켜줘야 한다.
   
```javascript
  render() {
    return(
      <div>
        /* Add Elements */ {/* Error, 주석도 { }안에 작성 */}
      </div>
    )
  }
```


## 2. JavaScript Expression
 - { } braket 으로 감싸서 표현
 
 
## 3. Inline Style
 - style을 설정할 때는 camelCase인 객체가 사용된다.
 - onclick -> onClick
 
 ex) style={{backgroundColor='blue'}}
 
 
## 4. Comments
 - JSX안에 주석을 사용할 때는 /* ... */ 형식 사용
 - 주석은 container element 안에만 작성 가능
```javascript
render() {
  let text = 'Hello';
  return (
    <div>
      {/* Comments */}
      {/* Multi-line
          Comments */}
      {text}
    </div>
  )
}
```
