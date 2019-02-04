import React from 'react';
import { Button } from '@material-ui/core';
function welcome(props) {
  return (
    <div>
      <h1>Hello, {props.nome}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={props.exibeOcultaWelcomeStateFul}
      >
        exibe/oculta stateFul component
      </Button>
    </div>
  );
}
export default welcome;
