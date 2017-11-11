import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <h2>Random number generator</h2>
       <RandomNumberGen />
      </div>
    );
  }
}

class RandomNumberGen extends Component {
  constructor(props) {
    super(props);
    this.state = {rand: -1, upper: 0, lower: 0};
    this.onSubmit = this.onSubmit.bind(this);
    this.onLowerChange = this.onLowerChange.bind(this);
    this.onUpperChange = this.onUpperChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState(function(oldState, props) {
      return {
        rand: this.generateRandomInRange(parseInt(oldState.lower), parseInt(oldState.upper))
      }
    });
  }

  onUpperChange(e) {
    e.preventDefault();
      this.setState({upper: e.target.value});
  }

  onLowerChange(e) {
    e.preventDefault();
    this.setState({lower: e.target.value});
  }

  generateRandomInRange(lower, upper) {
    return Math.round(Math.random() * (upper - lower) + lower);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Lower acceptable
              <input type="text" value={this.state.lower} onChange={this.onLowerChange} />
            </label>
            <label>Upper acceptable
              <input type="text" value={this.state.upper} onChange={this.onUpperChange} />
            </label>
            <input type="submit" value="Generate"/>
          </form>
        </div>
        <RNGResult number={this.state.rand}/>
      </div>
    );
  }
}

class RNGResult extends Component {
  render() {
    if(this.props.number < 0) 
      return null;
    return (
      <div>Random number: {this.props.number}</div>
    );  
  }
}


export default App;
