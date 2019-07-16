import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { shoppingCartOperations } from '../redux';
const shoppingCartPage = props => {
  return (
    <div>
      <h1>ShoppingCartPage</h1>
      <Button variant="contained" color="primary" onClick={() => props.efetuarCompra(true)}>
        Comprar
      </Button>
      <div>{`Compra efetuada: ${props.compraEfetuada}`}</div>
    </div>
  );
};

const mapDispatchToProps = {
  efetuarCompra: shoppingCartOperations.efetuarCompra
};
export default connect(
  null,
  mapDispatchToProps
)(shoppingCartPage);
