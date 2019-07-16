import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

export const notificacao = props => {
  const { classes, className, mensagem, variant, exibeNotificacao, ocultaNotificacao } = props;
  return (
    <Snackbar
      id="snackBarNotificacao"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={exibeNotificacao}
      autoHideDuration={4000}
      onClose={ocultaNotificacao}
      style={{ display: mensagem.length ? 'block' : 'none' }}
    >
      {mensagem.length ? (
        <SnackbarContent
          id="snackBackContent"
          className={classNames(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={mensagem}
          action={[
            <IconButton
              id="iconOcultarNotificacao"
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={ocultaNotificacao}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      ) : null}
    </Snackbar>
  );
};

notificacao.defaultProps = {
  variante: 'success',
  mensagem: ''
};

notificacao.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  mensagem: PropTypes.node || PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  ocultaNotificacao: PropTypes.func
};

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default withStyles(styles)(notificacao);
