export const NOTIFICA = 'notificacao/NOTIFICA';
export const OCULTA_NOTIFICACAO = 'notificacao/OCULTA_NOTIFICACAO';

const notificaErro = (mensagem) => {
  return {
    type: NOTIFICA,
    payload: { mensagem, variant: 'error' }
  };
};

const notificaSucesso = (mensagem) => {
  return {
    type: NOTIFICA,
    payload: { mensagem, variant: 'success' }
  };
};

const ocultaNotificacao = () => {
  return {
    type: OCULTA_NOTIFICACAO
  };
};
export { notificaErro, ocultaNotificacao, notificaSucesso };
