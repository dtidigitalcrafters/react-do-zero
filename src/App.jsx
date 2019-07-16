import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import { BookStoreAppBar } from './features/layout';
import { WishListPage } from './features/wishList';
import { ShoppingContainer } from './features/shoppingCart';
import { BookStoreContainer } from './features/booksStore';
import { NotificacaoContainer } from './features/notificacao';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header>
              <BookStoreAppBar />
            </header>
            <div className="content">
              <Switch>
                <Route exact path="/" component={BookStoreContainer} />
                <Route exact path="/shopping-cart" component={ShoppingContainer} />
                <Route exact path="/wishlist" component={WishListPage} />
                <Route path="/(\w+)" component={BookStoreContainer} />
              </Switch>
            </div>
          </div>
          <NotificacaoContainer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
