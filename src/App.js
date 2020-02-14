import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    number: 0
  }

  // clickMe = () => {
  //   this.setState({
  //     number: this.state.number 7})
  // }

  render () {
    return (
      <div className="container">
        <div className="">
          <h1>{this.state.number}</h1>
        </div>
        <div className="inner-container">
          <Button onClick={this.clickMe} but="7"></Button>
          <Button but="8"/>
          <Button but="9"/>
          <Button but="C"/>
          <Button but="4"/>
          <Button but="5"/>
          <Button but="6"/>
          <Button but="X"/>
          <Button but="1"/>
          <Button but="2"/>
          <Button but="3"/>
          <Button but="÷"/>
          <Button but="0"/>
          <Button but="+"/>
          <Button but="-"/>
          <Button but="="/>
        </div>
      
        
      </div>
    )
  }
}

export default App;

const Button = (props) => {
  return <button className="button">{props.but}</button>
}