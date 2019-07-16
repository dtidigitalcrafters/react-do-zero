import { combineReducers } from 'redux';
import { bookStoreReducer } from '../features/booksStore/redux/';
import { shoppingCartReducer } from '../features/shoppingCart/redux/';
import { notificacaoReducers } from '../features/notificacao/redux';

const reducer = combineReducers({
  bookStoreReducer,
  shoppingCart: shoppingCartReducer,
  notificacao: notificacaoReducers
});

export default reducer;
