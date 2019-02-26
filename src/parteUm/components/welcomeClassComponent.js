import React from 'react';
class Welcome extends React.Component {
  /**
   * o shouldComponentUpdate é um dos métodos mais importantes do
   * lifecycle de um componente class
   * ele deve retornar true ou false para atualizar o componente
   * isso implica que, você pode controlar a atualização do seu componente
   * para que ele atualize somente quando coisas que interessam a ele mudarem de fato
   * para você saber se o componente precisa ser alterado
   * esse método te dá como paramentros o proximo
   * props que ele vai receber e o proximo state
   * você pode então usar esses parâmetros para dizer ao react se
   * esse componente deve ou não ser atualizado
   * obs. a implementação de nenhum lifecycle é obrigatória
   *      no caso do shouldComponentUpdate se você não implementar
   *      o componente sempre irá atualizar
   */
  shouldComponentUpdate(nextProps, nextState) {
    // retorna true se o proximo nome recebido na props for diferente do atual
    // o se a prop 'exibeWelcomeClass' for alterada
    return (
      nextProps.nome !== this.props.nome ||
      nextProps.exibeWelcomeClass !== this.props.exibeWelcomeClass
    );
  }
  render() {
    if(this.props.exibeWelcomeClass) {
      return <h1>Hello, {this.props.nome}</h1>
    }
    return null
  }
}
export default Welcome;
