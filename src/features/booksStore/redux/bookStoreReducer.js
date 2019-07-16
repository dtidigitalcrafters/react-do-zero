import { INCLUI_LISTA_DESEJOS, INCLUI_NO_CARRINHO, SET_BOOKS } from './bookStoreActions';
const INITIAL_STATE = {
  listaDesejos: [],
  itensCarrinho: [],
  books: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCLUI_LISTA_DESEJOS:
      return { ...state, listaDesejos: [...state.listaDesejos, action.payload] };

    case INCLUI_NO_CARRINHO:
      return { ...state, itensCarrinho: [...state.itensCarrinho, action.payload] };

    case SET_BOOKS:
      return { ...state, books: action.payload ? action.payload : [] };

    default:
      return state;
  }
};
