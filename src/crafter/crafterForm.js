import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

class CrafterForm extends Component {
  state = {
    nome: '',
    email: ''
  };

  alteraValor = (e, nomeCampo) => {
    const { target } = e;
    this.setState({
      [nomeCampo]: target.value
    });
  };

  onSave = () => {
    this.props.incluiCrafter(this.state);
    this.setState({
      nome: '',
      email: ''
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        item
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid container direction="column">
          <TextField
            value={this.state.nome}
            onChange={e => this.alteraValor(e, 'nome')}
            fullWidth
            id="standard-dense"
            label="Nome"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            value={this.state.email}
            onChange={e => this.alteraValor(e, 'email')}
            fullWidth
            id="standard-dense"
            label="Email"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
        </Grid>
        <Grid container item direction="row" justify="space-around">
          <Button
            variant="contained"
            color="defautl"
            onClick={this.props.exibirForm}
          >
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={this.onSave}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  }
});

export default withStyles(styles)(CrafterForm);
