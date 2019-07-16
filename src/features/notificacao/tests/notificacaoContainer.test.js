import React from 'react';
import { shallow } from 'enzyme';
import { NotificacaoContainer } from '../views/NotificacaoContainer';
import  Notificacao  from '../views/notificacao';

describe('Testa <NotificacaoContainer />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<NotificacaoContainer reduxProps={{}}/>);
  });
  it('Deve renderizar <NotificacaoContainer /> ', () => {
    expect(component).toMatchSnapshot();
  });
  it('Deve renderizar <Notificacao /> ', () => {
    expect(component.find(Notificacao).exists()).toEqual(true);
  });

  it('Deve setar props exibeNotificacao para true e state exibeNotificacao deve ser true ', () => {
    component.setProps({
      reduxProps: { exibeNotificacao: true }
    });
    expect(component.state().exibeNotificacao).toEqual(true);
  });

  it('Deve setar props exibeNotificacao para false e state exibeNotificacao deve ser false ', () => {
    component.setProps({
      reduxProps: { exibeNotificacao: false }
    });
    expect(component.state().exibeNotificacao).toEqual(false);
  });
});
