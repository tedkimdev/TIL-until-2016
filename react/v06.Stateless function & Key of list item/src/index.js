import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter2 from './components/Counter'
import Sum from './components/Sum'
import RandomImages from './components/RandomImages'

class Describe extends Component {

  render() {
    return(
      <div>
        <div style={{color:'red'}}>
        Describe: {this.props.desc}</div>
      </div>
    )
  }
}
class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {describe: 'none'}
    this.updateDescribe = this.updateDescribe.bind(this)
  }

  updateDescribe(describe){
    this.setState({describe: describe})
  }

  render() {
    console.log('Examples.render()');
    return (
      <div>
        <h1>React</h1>
        <Describe desc={this.state.describe} />
        <Counter2 counterDesc={this.updateDescribe}/>
        <Sum sumDesc={this.updateDescribe}/>
        <RandomImages/>
      </div>
    )
  }
}
ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)