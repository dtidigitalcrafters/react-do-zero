import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core/';
import IconeCart from './iconeCart';
import IconeFavorite from './iconeFavorite';
import IconeAccount from './iconeAccount';
import logo from '../../../logo.svg';

const BookStoreAppBar = props => {
  // /**
  //  * Navega para o path e passa data como parametro
  //  */
  const goTo = path => {
    props.history.push({
      pathname: path,
      data: { idUsuario: 1, teste: 'bla' }
    });
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid container direction="row" alignItems="center" justify="space-between">
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              xs={3}
              md={3}
              sm={6}
              lg={3}
              className={classes.logoContainer}
              onClick={() => props.history.replace('/')}
            >
              <img src={logo} alt="logo" className={classes.img} />
              <Typography variant="h6">Books</Typography>
            </Grid>

            <Grid
              container
              item
              direction="row"
              alignItems="center"
              xs={6}
              sm={3}
              md={3}
              lg={2}
              justify="space-between"
            >
              <IconeCart badgeContent={props.itensCarrinho.length} goTo={goTo} />
              <IconeFavorite badgeContent={props.listaDesejos.length} goTo={goTo} />

              <IconeAccount />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

BookStoreAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  root: {
    flexGrow: 1
  },
  logoContainer: {
    cursor: 'pointer'
  },
  img: {
    height: 50,
    width: 50
  }
};

export const mapStateToProps = state => {
  return {
    listaDesejos: state.bookStoreReducer.listaDesejos,
    itensCarrinho: state.bookStoreReducer.itensCarrinho
  };
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(BookStoreAppBar);
