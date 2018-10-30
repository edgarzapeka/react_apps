import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/TodoList';
import Header from './containers/Header';

class App extends Component {

  state = {
    mode: 'default'
  }

  changeMode = (mode) => {
    this.setState({
      mode: mode
    });
  };

  render() {
    const { mode } = this.state;

    return (
      <div className="App container">
        <Header mode={mode} changeMode={this.changeMode}/>
        <TodoList mode={mode}/>
      </div>
    );
  }
}

export default App;
