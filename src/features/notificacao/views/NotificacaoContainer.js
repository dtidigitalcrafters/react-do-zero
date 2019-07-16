import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notificacao from './notificacao';
import { notificacaoActions } from '../redux';

export class NotificacaoContainer extends Component {
  state = {
    exibeNotificacao: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reduxProps.exibeNotificacao !== prevState.exibeNotificacao) {
      return { exibeNotificacao: nextProps.reduxProps.exibeNotificacao };
    } else return prevState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.reduxProps.exibeNotificacao !==
      nextProps.reduxProps.exibeNotificacao
    );
  }

  render() {
    return (
      <React.Fragment>
        <Notificacao
          {...{
            ...this.props.reduxProps,
            ocultaNotificacao: this.props.ocultaNotificacao
          }}
        />
      </React.Fragment>
    );
  }
}
NotificacaoContainer.defaultProps = {
  reduxProps: {}
}

NotificacaoContainer.prototypes = {
  reduxProps: PropTypes.object.isRequired,
  ocultaNotificacao: PropTypes.func.isRequired
};

const mapStateToProps = ({ notificacao }) => {
  return {
    reduxProps: {
      mensagem: notificacao.mensagem,
      exibeNotificacao: notificacao.exibeNotificacao,
      variant: notificacao.variant
    }
  };
};
const mapDispatchToProps = {
  ...notificacaoActions
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificacaoContainer);
