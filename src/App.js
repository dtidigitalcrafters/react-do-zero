import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import { Typography, Grid } from '@material-ui/core/';
import './App.css';
import CrafterList from './crafter/crafterList';
import { craftersMock } from './craftersMock';

// import classes from './App.module.css';
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container direction="column" className="App-container">
          <Grid container item justify="flex-start" direction="row">
            <header className="App-header">
              <Typography variant="h3">Crafters</Typography>
            </header>
          </Grid>
          <CrafterList crafters={craftersMock} />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
