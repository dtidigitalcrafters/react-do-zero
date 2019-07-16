import BooksStoreService from './booksStoreService';
class BookStoreManager {
  constructor() {}
  async getBooks() {
    try {
      const respostaServico = await BooksStoreService.getBooks();
      return respostaServico.data;
    } catch (error) {
      console.log('error :', error);
    }
  }
}

export default new BookStoreManager();
