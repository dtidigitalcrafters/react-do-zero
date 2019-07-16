import { notificacaoActions } from '../redux/';
import { notificacaoErroMock, notificacaoSucessoMock } from './mock.ig';

describe('Teste notificacaoActions', () => {
  it('notificaErro chamada de operations', () => {
    expect(notificacaoActions.notificaErro(notificacaoErroMock.mensagem)).toEqual({
      type: notificacaoActions.NOTIFICA,
      payload: notificacaoErroMock
    });
  });
  it('notificaSucesso chamada de operations', () => {
    expect(notificacaoActions.notificaSucesso(notificacaoSucessoMock.mensagem)).toEqual({
      type: notificacaoActions.NOTIFICA,
      payload: notificacaoSucessoMock
    });
  });

  it('ocultaNotificacao', () => {
    expect(notificacaoActions.ocultaNotificacao()).toEqual({
      type: notificacaoActions.OCULTA_NOTIFICACAO
    });
  });
});
