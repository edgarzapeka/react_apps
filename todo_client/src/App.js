import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';

class App extends Component {

  state = {
    mode: 'viewing'
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
