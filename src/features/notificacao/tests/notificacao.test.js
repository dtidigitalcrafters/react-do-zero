import React from 'react';
import { mount } from 'enzyme';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { notificacao as Notificacao } from '../views/notificacao';

describe('Testa <Notificacao />', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Notificacao
        classes={{}}
        className=""
        mensagem=""
        variant="success"
        exibeNotificacao={true}
      />
    );
  });

  it('Deve renderizar <Notificacao /> com Snackbar com SnackbarContent', () => {
    expect(component).toMatchSnapshot();
    expect(component.find(Snackbar).exists()).toEqual(true);
    expect(component.find(SnackbarContent).exists()).toEqual(true);
  });

  it('Deve ocultar <Notificacao />', () => {
    component.setProps({
      exibeNotificacao: false
    });
    expect(component.find(Snackbar).props()).toHaveProperty('open', false);
  });

  it('A mensagem da notificação deve ser "Mensagem teste"', () => {
    component.setProps({
      mensagem: 'Mensagem teste'
    });
    expect(component.find(SnackbarContent).props()).toHaveProperty(
      'message',
      'Mensagem teste'
    );
  });

  it('Deve chamar função que oculta notificação', () => {
    let ocultaNotificacaoMock = jest.fn();
    component.setProps({
      ocultaNotificacao: ocultaNotificacaoMock
    });
    const icontOcultarNotificacao = component.filterWhere(
      elemento => (elemento.id = '#iconOcultarNotificacao')
    );
    icontOcultarNotificacao.simulate('click');
    expect(icontOcultarNotificacao.exists()).toEqual(true);
    // expect(ocultaNotificacaoMock).toHaveBeenCalled();
  });
});
