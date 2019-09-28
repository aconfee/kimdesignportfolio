import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Home from './pages/home/home.component.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="page-content-container">
          <Route exact path="/" component={ Home } />
        </div>
      </div>
    );
  }
}

export default App;
