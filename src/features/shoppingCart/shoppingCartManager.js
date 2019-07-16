import ShoppingCartService from './shoppingCartService';
class ShoppingCartManager {
  async efetuarCompra(dadosCompra) {
    try {
      // aplica alguma lógica de negócio antes de enviar dados da compra
      const respostaServico = await ShoppingCartService.efetuarCompra(dadosCompra);
      return respostaServico.data;
    } catch (error) {
      throw new Error('Erro ao enviar dados da compra');
    }
  }
}

export default new ShoppingCartManager();
