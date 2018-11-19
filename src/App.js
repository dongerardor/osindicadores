import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Dashboard from './components/Dashboard';
import Receitas from './components/Receitas';
import Despesas from './components/Despesas';
import Resultados from './components/Resultados';
import Folha from './components/Folha';
import Dre from './components/Dre';
import Rentabilidade from './components/Rentabilidade';
import Cenarios from './components/Cenarios';
import Precificador from './components/Precificador';

import ButtonAppBar from './components/navigation/ButtonAppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



class App extends Component {
  constructor(props) {
    super(props);
    this.theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
      palette: {
        type: 'dark',
      },
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <CssBaseline />
      
          <div className="App">

            <ButtonAppBar/>
            <p>Pipoca pi</p>

            <div id='container'>
              <Router>
                <Switch>
                  <Route path="/receitas" component={Receitas} />
                  <Route path="/despesas" component={Despesas} />
                  <Route path="/folha" component={Folha} />
                  <Route path="/resultados" component={Resultados} />
                  <Route path="/dre" component={Dre} />
                  <Route path="/rentabilidade" component={Rentabilidade} />
                  <Route path="/cenarios" component={Cenarios} />
                  <Route path="/precificador" component={Precificador} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </Router>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
