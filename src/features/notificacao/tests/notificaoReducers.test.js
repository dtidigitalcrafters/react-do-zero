import { notificacaoActions } from '../redux/';
import notificacaoReducer from '../redux/notificacaoReducers';
import { notificacaoErroMock, notificacaoSucessoMock, ocultaNotificacaoMock } from './mock.ig';

describe('Teste Notificacao Reducer', () => {
  const state = {
    mensagem: '',
    exibeNotificacao: true,
    variant: 'success'
  };

  it('Estado inicial', () => {
    const newState = notificacaoReducer(undefined, {
      type: ''
    });
    expect(newState).toEqual({ ...state, exibeNotificacao: false });
  });

  it('Action inexistente (default)', () => {
    const newState = notificacaoReducer(state, {
      type: ''
    });
    expect(newState).toEqual({ ...state, exibeNotificacao: true });
  });

  it('NOTIFICA - SUCCESS', () => {
    const newState = notificacaoReducer(state, {
      type: notificacaoActions.NOTIFICA,
      payload: { ...notificacaoSucessoMock }
    });
    expect(newState).toEqual({ ...state, ...notificacaoSucessoMock });
  });

  it('NOTIFICA - ERROR', () => {
    const newState = notificacaoReducer(state, {
      type: notificacaoActions.NOTIFICA,
      payload: { ...notificacaoErroMock }
    });
    expect(newState).toEqual({ ...state, ...notificacaoErroMock });
  });

  it('OCULTA NOTIFICAÇÃO', () => {
    const state = {
      mensagem: 'Mensagem erro',
      exibeNotificacao: false,
      variant: 'error'
    };
    const newState = notificacaoReducer(state, {
      type: notificacaoActions.OCULTA_NOTIFICACAO,
      payload: { ...ocultaNotificacaoMock }
    });
    expect(newState).toEqual({ ...state, ...ocultaNotificacaoMock });
  });
});
