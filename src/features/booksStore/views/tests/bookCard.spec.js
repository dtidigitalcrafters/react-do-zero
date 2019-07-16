import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { BookCard } from '../bookCard';
import { booksMock } from '../../../booksMock';
configure({ adapter: new Adapter() });

describe('Testa <BookCard />', function() {
  let incluiNoCarrinhoMock = jest.fn();
  let incluiNalistaDesejosMock = jest.fn();
  const bookMock = { ...booksMock.items[0] };
  let component;
  beforeEach(() => {
    component = shallow(
      <BookCard
        incluiNoCarrinho={incluiNoCarrinhoMock}
        incluiNalistaDesejos={incluiNalistaDesejosMock}
        classes={{}}
        book={bookMock}
      />
    );
  });

  it('Deve renderizar <BookCard /> ', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it(`Deve renderizar a imagem do book: imgBook${bookMock.id}`, () => {
    const imagemBook = component.find(`#imgBook${bookMock.id}`);
    expect(imagemBook.exists()).toEqual(true);
    expect(imagemBook.props().image).toEqual(bookMock.volumeInfo.imageLinks.smallThumbnail);
    // expect(imagemBook.props().image).toEqual('bla');
  });

  it(`Ao clicar na imagem do <BookCard /> deve chamar o window.alert() com a mensagem ${
    bookMock.volumeInfo.title
  }`, () => {
    global.alert = jest.fn();
    const imagemBook = component.find(`#imgBook${bookMock.id}`);
    imagemBook.simulate('click');
    expect(global.alert).toHaveBeenCalled();
    expect(global.alert).toBeCalledWith(bookMock.volumeInfo.title);
  });

  it(`Deve renderizar o botão de incluir em na lista e desejos: btnFavorite${bookMock.id}`, () => {
    expect(component.find(`#btnFavorite${bookMock.id}`).exists()).toEqual(true);
  });

  it(`Ao clicar no de icone de  incluir em na lista e desejos: btnFavorite${
    bookMock.id
  } a função props.incluiNalistaDesejos() deve ser executada `, () => {
    const botao = component.find(`#btnFavorite${bookMock.id}`);
    botao.simulate('click');
    expect(incluiNalistaDesejosMock).toHaveBeenCalled();
  });

  it(`Deve renderizar o botão de incluir no carrinho de compras: btnShopping${bookMock.id}`, () => {
    expect(component.find(`#btnShopping${bookMock.id}`).exists()).toEqual(true);
  });

  it(`Ao clicar no botão  de incluir no carrinho de compras: btnShopping${
    bookMock.id
  } a função props.incluiNoCarrinho() deve ser executada `, () => {
    const botao = component.find(`#btnShopping${bookMock.id}`);
    botao.simulate('click');
    expect(incluiNoCarrinhoMock).toHaveBeenCalled();
  });

  it(`Deve renderizar o titulo do livro ${bookMock.volumeInfo.title}`, () => {
    expect(component.find(`#tituloLivro${bookMock.id}`).exists()).toEqual(true);
    expect(
      component
        .find(`#tituloLivro${bookMock.id}`)
        .children()
        .text()
    ).toEqual(bookMock.volumeInfo.title);
  });

  it(`Deve renderizar o autor do livro ${bookMock.volumeInfo.authors[0]}`, () => {
    expect(component.find(`#autorLivro${bookMock.id}`).exists()).toEqual(true);
    expect(
      component
        .find(`#autorLivro${bookMock.id}`)
        .children()
        .text()
    ).toEqual(bookMock.volumeInfo.authors[0]);
  });
});
