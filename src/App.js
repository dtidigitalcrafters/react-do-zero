import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import PropTypes from 'prop-types';
import CrafterList from './crafter/crafterList';
import { Typography } from '@material-ui/core/';
import { craftersMock } from './craftersMock';
import './App.css';
// import classes from './App.module.css';
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Typography variant="h1">Crafters</Typography>
          </header>
          <div className="content">
            <CrafterList crafters={craftersMock} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
