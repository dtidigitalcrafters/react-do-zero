import {
  NOTIFICA,
  OCULTA_NOTIFICACAO
} from './notificacaoActions';
const INITIAL_STATE = {
  mensagem: '',
  exibeNotificacao: false,
  variant: 'success'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFICA:
      return {
        ...state,
        mensagem: action.payload.mensagem,
        exibeNotificacao: true,
        variant: action.payload.variant
      };
    case OCULTA_NOTIFICACAO:
      return { ...state, mensagem: '', exibeNotificacao: false };

    default:
      return state;
  }
};
