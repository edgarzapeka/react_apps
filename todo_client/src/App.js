import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import ModeContext from './ModeContext';

const App = props => {
  const [ mode, setMode ] = useState('viewing');

  return (
    <div className="App container">
      <ModeContext.Provider value={[mode, setMode]}>
        <Header mode={mode} changeMode={setMode}/>
        <TodoList mode={mode}/>
      </ModeContext.Provider>
    </div>
  );
  
}

export default App;
