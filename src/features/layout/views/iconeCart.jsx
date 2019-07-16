import React, { Component, useEffect } from 'react';
import { Badge, IconButton } from '@material-ui/core/';
import { ShoppingCart } from '@material-ui/icons/';

const IconeCart = props => {
  useEffect(() => {
    console.log('useEffect IconeCart');
  }, [props.badgeContent]);

  return (
    <IconButton color="inherit" onClick={() => props.goTo('shopping-cart')}>
      <Badge badgeContent={props.badgeContent} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default IconeCart;
