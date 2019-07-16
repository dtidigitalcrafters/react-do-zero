export const EFETUAR_COMPRA = 'EFETUAR_COMPRA';

export const efetuarCompra = compraEfetuada => {
  return {
    type: EFETUAR_COMPRA,
    payload: compraEfetuada
  };
};
