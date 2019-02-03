import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from './styles/theme';
import './App.css';
import { craftersMock } from './craftersMock';
import { removeObjetoNoArray } from './utils';
// import classes from './App.module.css';
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

class App extends Component {
  state = {
    crafters: craftersMock
  };
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
