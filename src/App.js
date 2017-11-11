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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text="custom text 1" />
        <Listy list={["Hi", "this", "is", "my", "name"]} />
        <Button text="custom hello 2" />
        <Button text="Megan"/>
        <Listy list={["A", "B", "C"]}/>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <h1>
        This is a test of a custom button component in React with custom text: {this.props.text}
      </h1>
    )
  }
}

class Listy extends Component {
  render() {
    const list_items = this.props.list.map(item => (
      <li>{item}</li>
    ));

    return (
      <ul>
        {list_items}
      </ul>
    )
  }
}

export default App;
