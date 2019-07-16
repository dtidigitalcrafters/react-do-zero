import axios from 'axios';
import { booksMock } from './mocks/booksStoreMock';
const URL_API = 'https://workshopreact-a7f54.firebaseio.com/books.json/';
class BookStoreService {
  constructor() {}
  async getBooks() {
    // return await axios.get(URL_API);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(booksMock);
      }, 2000);
    });
  }
}
export default new BookStoreService();
