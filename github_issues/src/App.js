import React, { Component } from 'react';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import { Route } from 'react-router-dom';

import { app } from './styles/app.module.scss';


class App extends Component {
  render() {
    return (
      <div className={app}>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchResults} />
      </div>
    );
  }
}

export default App;
