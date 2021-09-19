import React, { Component } from 'react'
import axios from "axios"

import '../styles/AllBooks.css'

class AllBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    // Get the list of books
    axios.get("http://localhost:8080/api/v1/books/all")
    .then(res => {
      const books = res.data;
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="container-books">
        <div>
          <div className="all-products ">
            <h4 className="slab-serif-white"><b>All Products</b></h4>
            <h5 className="slab-serif-white">filter | 0 items</h5>
          </div>
          <div className="books-container">
            {
              this.state.books.map(book => {
                return (        
                  <p> 
                    <div className="image-group">
                    <img className="cover-image"
                    src={book.coverImage}
                    alt="new"
                    />
                    <br></br>
                    <b>
                      {book.bookName}
                    </b>
                    </div>
                  </p> 
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default AllBooks;