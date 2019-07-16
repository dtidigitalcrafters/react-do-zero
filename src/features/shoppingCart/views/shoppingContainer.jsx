import React from 'react';
import ShoppingCartPage from './shoppingCartPage';
import { connect } from 'react-redux';
const shoppingContainer = props => {
  console.log('props :', props);
  return <ShoppingCartPage compraEfetuada={props.compraEfetuada} />;
};
const mapStateToProps = ({ shoppingCart }) => {
  return {
    compraEfetuada: shoppingCart.compraEfetuada
  };
};

export default connect(mapStateToProps)(shoppingContainer);
