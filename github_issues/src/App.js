import React, { Component } from 'react';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import { Route, Switch } from 'react-router-dom';
import QueryString from 'query-string';

import { app } from './styles/app.module.scss';


class App extends Component {
  render() {
    return (
      <div className={app}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={(match) => (
           <SearchResults repo={QueryString.parse(match.location.search).repo} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
