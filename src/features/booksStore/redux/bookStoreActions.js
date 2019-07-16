export const INCLUI_NO_CARRINHO = 'bookStore/INCLUI_NO_CARRINHO';
export const INCLUI_LISTA_DESEJOS = 'bookStore/INCLUI_LISTA_DESEJOS';
export const SET_BOOKS = 'bookStore/SET_BOOKS';

export const incluiNoCarrinho = book => {
  return {
    type: INCLUI_NO_CARRINHO,
    payload: book
  };
};

export const incluiNalistaDesejos = book => {
  return {
    type: INCLUI_LISTA_DESEJOS,
    payload: book
  };
};

export const setBooks = books => {
  return {
    type: SET_BOOKS,
    payload: books
  };
};
