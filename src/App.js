import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Inicio from './Inicio';
import Dashboard from './Dashboard';
import Receitas from './Receitas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Inicio} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/receitas" component={Receitas} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
