#Optional

- 값이 설정되지 않은 것(not set) : nil
  - optional 이 not set 인 상태, 0이 아님.
- 값이 설정된 것(set) : associated value
  - String? 타입 : Optional 타입인데 associtaed value 가 String 이라는 뜻. Optional String
  
    -> Optional 타입

## Optional 사용하는 이유
- Int 와 같은 타입부터 객체에 대한 포인터까지, 아직 set 되지 않은 것이 무엇인지 확실히 하려고 사용
  
```swift
  let digit = sender.currentTitle!
```
- ! 는 set 되어있지 않은 상태에 있는 Optional 에서 값을 꺼낼 때, 에러가 난다. 
 - 즉, nil 인 경우에 !를 쓰면 에러가 날 것이다.
