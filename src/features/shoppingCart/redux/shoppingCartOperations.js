import * as shoppingCartActions from '../redux/shoppingCartActions';
import ShoppingCartManager from '../shoppingCartManager';

export const efetuarCompra = () => async dispatch => {
  const respostaAPI = await ShoppingCartManager.efetuarCompra()
  dispatch(shoppingCartActions.efetuarCompra(respostaAPI));
};
