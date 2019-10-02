import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/home/home.component.js';
import AndPeonies from './pages/andPeonies/andPeonies.component';
import Cloverleaf from './pages/cloverleaf/cloverleaf.component';

class App extends Component {
  render() {
      return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/andpeonies" component={AndPeonies} />
            <Route exact path="/cloverleaf" component={Cloverleaf} />
        </div>
    );
  }
}

export default App;
