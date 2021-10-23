import axios from "axios";

const BOOK_API_BASE_URL = 'http://localhost:8080/api/v1/books/newBook';

class BookService {

  getBook() {
    return axios.get(BOOK_API_BASE_URL)
  }

  createBook(book) {
    return axios.post(BOOK_API_BASE_URL, book);
  }

}

export default new BookService()