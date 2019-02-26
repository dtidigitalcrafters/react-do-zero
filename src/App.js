import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import './App.css';

import WelcomeFunction from './parteUm/components/welcomeFunctionComponent';
import WelcomeClass from './parteUm/components/welcomeClassComponent';

// import classes from './App.module.css';
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

class App extends Component {
  state = {
    helloFunction: 'Eu sou um Function component',
    helloClass: 'Eu sou um Class component',
    contador: 0,
    exibeWelcomeClass: true
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
    setInterval(() => {
      this.setState(prevState => {
        return {
          contador: prevState.contador + 1
        };
      });
    }, 1000);
    // após 3 sec que o componente foi montado, atualiza o nome do WelcomeFunction
    setTimeout(() => {
      this.setState({
        helloFunction: `${this.state.helloFunction} - alterado após 3sec`
      });
    }, 3000);
    // após 5 sec que o componente foi montado, atualiza o nome do WelcomeClass
    setTimeout(() => {
      this.setState({
        helloClass: `${this.state.helloClass} - alterado após 5sec`
      });
    }, 5000);
  };

  /**
   * não somente 'dados' podem ser passados como props para componentes filhos
   * mas também referencias de funções no componente pai
   * para que sejam chamadas nos filhos
   */
  exibeWelcomeClass = () => {
    this.setState({
      exibeWelcomeClass: !this.state.exibeWelcomeClass
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1>{this.state.contador}</h1>
            <WelcomeFunction
              nome={this.state.helloFunction}
              exibeWelcomeClass={this.exibeWelcomeClass}
            />
            <WelcomeClass
              nome={this.state.helloClass}
              exibeWelcomeClass={this.state.exibeWelcomeClass}
            />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
