import React, { Component } from 'react';

class WishListPage extends Component {
  render() {
    // location é uma prop que o componente recebe do react router
    const { location } = this.props;
    return (
      <div>
        <h1>WishListPage</h1>
        {location.data &&
          `Parametros recebidos na navegaçao ${JSON.stringify(location.data, null, 2)}`}
      </div>
    );
  }
}
export default WishListPage;
