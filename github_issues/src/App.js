import React, { Component } from 'react';
import Home from './components/Home';

import { app } from './styles/app.module.scss';


class App extends Component {
  render() {
    return (
      <div className={app}>
        <Home />
      </div>
    );
  }
}

export default App;
