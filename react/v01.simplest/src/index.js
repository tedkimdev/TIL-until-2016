import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//1st option
//jsx 문법을 따른다.

class Examples extends Component {
  func01() {
  	console.log("Hello from func01");
  	return "function of class"
  }
  render() {
  	const func02 = function(){
  	  console.log("Hello from func02");
  	  return "function in render()"
    }
    return (
      <div>
        <div>Simple react</div>
        <div style={{color:"red"}}>Hello, World</div>
        <div> { 1+1 } </div>
        <div> {this.func01()} </div>
        <div> {func02()} </div>
      </div>
    )
  }
}

//2sd option
// class Examples extends Component {
// }
// Examples.prototype.render = function() {
//     return (
//       <div>Simple react</div>
//     )
// }

//3rd option
// function Examples(){}
// Examples.prototype.render = function() {
//     return (
//       <div>Simple react</div>
//     )
// }

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)