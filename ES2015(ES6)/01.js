// const, let  블록 스코프

(function() {
  console.log(x);
  var x = 10;
})(); // undefined;

(() => {
  console.log(x);
  const x = 10;
})(); // Uncaught ReferenceError: x is not defined


//const
const a = 100;
a = 101; // Uncaught TypeError: Assignment to constant variable.


//let
let b = 100;
b = 101; // 101


// const 는 다시 대입하는 것을 막고, 요소 변경은 가능
// = 을 통한 대입을 막음.
const c = [1, 2, 3];
c[0] = 4;
c; // [4, 2, 3]
const d = {name: 'Zero'};
d.name = 'One';
d; // {name: 'One'}