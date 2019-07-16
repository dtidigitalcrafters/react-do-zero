import * as bookStoreActions from '../redux/bookStoreActions';
import BookStoreManager from '../bookStoreManager';
import { notificacaoActions } from '../../notificacao/redux';

export const getBooks = () => async dispatch => {
  try {
    const books = await BookStoreManager.getBooks();
    dispatch(notificacaoActions.notificaSucesso('Sucesso..'));
    dispatch(bookStoreActions.setBooks(books));
  } catch (error) {
    dispatch(bookStoreActions.setBooks([]));
  }
};
