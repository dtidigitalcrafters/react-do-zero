import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import './App.css';

import WelcomeStateLess from './parteUm/components/welcomeStateLessComponent';
import WelcomeStateFul from './parteUm/components/welcomeStateFulComponent';

// import classes from './App.module.css';
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

class App extends Component {
  state = {
    nomeStateLess: 'stateLess',
    nomeStateFul: 'stateFul',
    exibeWelcomeStateFul: false
  };

  /**
   * o componentDidMount é um dos métodos do lifecycle de criação do componente
   * ele é executado quando o componente já montou
   * é um bom método para alterar o estado do componente, buscar dados numa API, etc..
   * vamos alterar o estado para ver refletir nos componentes filhos de App
   * para alterar o state(estado) do componente devemos usar a função setState() da classe
   * toda atualização do estado de um componente irá fazer com que
   * ele re-renderize a si e seus componentes filhos
   */
  componentDidMount = () => {
    // após 3 sec que o componente foi montado, atualiza o nome do stateLess
    setTimeout(() => {
      this.setState({
        nomeStateLess: `${this.state.nomeStateLess} - alterado após 3sec`
      });
    }, 3000);
    // após 5 sec que o componente foi montado, atualiza o nome do stateFul
    setTimeout(() => {
      this.setState({
        nomeStateFul: `${this.state.nomeStateFul} - alterado após 3sec`
      });
    }, 5000);
  };

  /**
   * não somente 'dados' podem ser passados como props para componentes filhos
   * mas também referencias de funções no componente pai
   * para que sejam chamadas nos filhos
   */
  exibeOcultaWelcomeStateFul = () => {
    this.setState({
      exibeWelcomeStateFul: !this.state.exibeWelcomeStateFul
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <WelcomeStateLess
              nome={this.state.nomeStateLess}
              exibeOcultaWelcomeStateFul={this.exibeOcultaWelcomeStateFul}
            />
            <WelcomeStateFul
              nome={this.state.nomeStateFul}
              exibeWelcomeStateFul={this.state.exibeWelcomeStateFul}
            />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
