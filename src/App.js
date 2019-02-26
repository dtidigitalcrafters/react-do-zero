import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import './App.css';
import CrafterPage from './crafter/crafterPage';
// import classes from './App.module.css';
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <CrafterPage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
