class ShoppingService {
  async efetuarCompra() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: true });
      }, 2000);
    });
    return promise;
  }
}

export default new ShoppingService();
