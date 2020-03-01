import React, { Component } from 'react';
import './App.css';
import Button from './components/button'

class App extends Component {
  state = {
    input: " ",
  }

  equation = (num) => {
    this.setState({
      input: this.state.input + num
    })
    if(num === "C"){
      this.clear()
    } else if(num === "="){
      this.equals()
    }
  }

  clear = () => {
    this.setState({
      input: " "
    })
    console.log("equation should clear")
  }

  equals = () => {
    this.setState({
      input: eval(this.state.input)
    })
    console.log("total")
  }

  render () {
    const buttonArr = ["7", "8", "9", "C", "4", "5", "6", "*", "1", "2", "3", "/", "0", "+", "-", "="]
    return (
      <div className="container">
        <div className="display">
          <h1>{this.state.input}</h1>
        </div>
        <div className="inner-container">
          {buttonArr.map((button, index) => {
            return <Button key={index} but={button} click={this.equation}/>
          })}


          {/* <Button clickMe={this.equation} but="7">7</Button>
          <Button clickMe={this.equation} but="8">8</Button>
          <Button clickMe={this.equation} but="9">9</Button>
          <Button clickMe={this.clear} but="C">C</Button>
          <Button clickMe={this.equation} but="4">4</Button>
          <Button clickMe={this.equation} but="5">5</Button>
          <Button clickMe={this.equation} but="6">6</Button>
          <Button clickMe={this.equation} but="*">x</Button>
          <Button clickMe={this.equation} but="1">1</Button>
          <Button clickMe={this.equation} but="2">2</Button>
          <Button clickMe={this.equation} but="3">3</Button>
          <Button clickMe={this.equation} but="/">÷</Button>
          <Button clickMe={this.equation} but="0">0</Button>
          <Button clickMe={this.equation} but="+">+</Button>
          <Button clickMe={this.equation} but="-">-</Button>
          <Button clickMe={this.equals} but="=">=</Button> */}
        </div>
      </div>
    )
  }
}

export default App;


