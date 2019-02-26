import React, { Component } from 'react';
import CrafterList from '../crafter/crafterList';
import { Typography, Grid, Button, Divider } from '@material-ui/core/';
import { craftersMock } from '../craftersMock';
import '../App.css';
import CrafterForm from './crafterForm';

class crafterPage extends Component {
  state = {
    showForm: false,
    crafters: [...craftersMock]
  };

  exibirForm = () => {
    this.setState(prevState => {
      return {
        showForm: !prevState.showForm
      };
    });
  };

  incluiCrafter = crafter => {
    this.setState({
      crafters: [crafter, ...this.state.crafters, ]
    });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        
      >
        <div className="content">
          <header className="App-header">
            <Typography variant="h2">Crafters</Typography>
          </header>

          <Button variant="contained" color="primary" onClick={this.exibirForm}>
            Novo
          </Button>

          {this.state.showForm && (
            <CrafterForm
              exibirForm={this.exibirForm}
              incluiCrafter={this.incluiCrafter}
            />
          )}

          <CrafterList crafters={this.state.crafters} />
        </div>
      </Grid>
    );
  }
}

export default crafterPage;
