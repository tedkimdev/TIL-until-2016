#props

- 컴포넌트 내부의 Immutable Data
- JSX 내부에서는 {this.props.propsName}
- 컴포넌트 사용 시, < > 꺽쇠 괄호 안에 props 설정
- this.props.children 은 기본적으로 가지고 있는 props

### 1. 컴포넌트 사용 시, props 설정
```javascript
//MyComponent 라는 컴포넌트 사용 시
render(){
  return (
    <div>
      <MyComponent propsName={value}/>
      <MyComponent name='Aney'/>
      {/* MyComponent의 this.props.name 값이 'Aney' */}
    </div>
  );
}
```

### 2. this.props.children
```javascript
render(){
  return(
    <div>
      <Cpnt>여기에 있는 값이 this.props.children 값</Cpnt>
    </div>
  );
}
```

- 하위 컴포넌트에 데이터 전달을 할 때,
  this.props,propsName과 this.props.children 을 사용하여 전달한다.
  
### 3. props 기본 값 설정
- 컴포넌트 선언 뒤에 defaultProps 객체를 선언한다.
- Component.defaultProps = {...}
```javascript
class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.value}
      </div>
    );
  }
};

App.defaultProps = {
  value: 0
};
```

### 3. Type 검증
- Component.propTypes = {...}
- 컴포넌트 선언 뒤에 추가
- 타입을 검증하여서, 개발자 콘솔에서 경고를 띄울 수 있다.
  - 참고) react minified 버전은 에러가 안뜸.
- 타입 종류는 react manual 참고

```javascript
App.propTypes = {
  value: React.PropTypes.string,
  secondValue: React.PropTypes.number,
  thirdValue: React.PropTypes.any.isRequired
};
```
