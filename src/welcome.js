import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log('Lifecycle de criação - construtor Welcome');
    this.state = {
      demoMostrar: this.props.devoMostrar
    };
  }

  componentWillMount() {
    console.log('Lifecycle de criação - componentWillMount Welcome');
    // console.log('this.props :', this.props);
  }

  componentDidMount() {
    console.log('Lifecycle de criação - componentDidMount Welcome');
    // // console.log('this.props :', this.props);
  }

  /**
   * React < 16.3
   * Este é executado antes do shouldComponentUpdate
   * sempre que componentes pais atualizam algo em seus estados
   * IMPORTANTE: Este era usado muito para sincronizar o state local
   * com uma props recebida. Porém se você se vê numa situação onde o
   * state local é sempre um espelho do props, não faz sentido sincronizar
   * é melhor usar o props de uma vez
   * @param {*} nextProps as novas props que este componente está recebendo
   */
  componentWillReceiveProps(nextProps) {
    console.log('Lifecycle de atualização - componentWillReceiveProps Welcome: ');
    // console.log('nextProps :', nextProps);
  }

  /**
   * React >= 16.3
   * este é executado tanto no Lifecycle de criação quanto atualização
   * ele veio para substituir o componentWillReceiveProps
   * então as regras são basicamente as mesmas (sincronizar o estado local com o props)
   * porém como foi dito, são rarismos os casos que será necessário
   * se seguirmos as boas práticas
   * IMPORTANTE: NÃO CHAME setState() AQUI, RETORNE O NOVO STATE OU NULL NA FUNÇÃO
   * se quiser saber mais porque não usar, veja o link abaixo:
   * https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
   * @param {*} props
   * @param {*} state
   */
  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle de atualização - getDerivedStateFromProps Welcome: ');
    // ERRADO
    // this.setState({...})

    // CERTO: retornar o state alterado ou null
    return null;
  }

  /**
   * Esse é um método do lifecycle muito utilizado para otimizar
   * a aplicação evitando renderizações desnecessárias dos componentes
   * IMPORTANTE: Esse método deve retornar true ou false para
   * dedicidir se continua o Lifecycle de atualização ou interrompe
   * @param {*} nextProps
   * @param {*} nextState
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Lifecycle de atualização - shouldComponentUpdate Welcome: ');
    console.log('nextProps :', nextProps);
    console.log('nextState :', nextState);
    return nextProps.devoMostrar;
  }

  /**
   *  React < 16.3
   * O componentWillUpdate é executado logo depois do shouldComponentUpdate
   * Ele foi deprecado por não fazer sentido seu uso e em muitos casos
   * utilizado de forma errada
   * @param {*} nextProps
   * @param {*} nextState
   */
  componentWillUpdate(nextProps, nextState) {
    console.log('Lifecycle de atualização - componentWillUpdate Welcome: ');
    console.log('nextProps :', nextProps);
    console.log('nextState :', nextState);
  }

  /**
   * Como o componentDidMount, este é comumente usado para por exemplo chamada
   * de API's coisas do tipo.
   * Ele também é executado depois do render
   * CUIDADO: chamar o setState() aqui sem uma lógica correta irá causar renderização
   * desnecessária e/ou loop
   * @param {*} prevProps
   * @param {*} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    console.log('Lifecycle de atualização - componentDidUpdate Welcome ');
    console.log('prevProps :', prevProps);
    console.log('prevState :', prevState);
  }

  /**
   * React >= 16.3
   * Este é executado imediatamente antes do
   * DOM real ser atualizado
   * Útil quando quiser guardar por exemplo a posição do
   * scroll na tela antes de ser atualizada
   * @param {*} prevProps
   * @param {*} prevState
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  render() {
    console.log('Lifecycle de criação/atualização - render Welcome');
    return (
      <React.Fragment>
        {this.props.devoMostrar && (
          <div>
            <h1>Welcome component</h1>
            <button onClick={this.props.mostraComentario}>Mostra comentario</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Welcome;
