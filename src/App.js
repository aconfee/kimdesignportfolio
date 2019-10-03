import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/home/home.component.js';
import AndPeonies from './pages/andPeonies/andPeonies.component';
import Cloverleaf from './pages/cloverleaf/cloverleaf.component';
import Contact from './pages/contact/contact.component';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/andpeonies" component={AndPeonies} />
        <Route exact path="/cloverleaf" component={Cloverleaf} />
        <Route exact path="/contact" component={Contact} />
      </div>
  );
  }
}

export default App;
