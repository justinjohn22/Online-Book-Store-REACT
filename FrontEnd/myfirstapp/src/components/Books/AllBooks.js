import React, { Component } from 'react'

import '../styles/AllBooks.css'

class AllBooks extends Component {
  render() {
    return (
      <div className="container-books">
        <div>
          <div className="all-products ">
            <h4 className="slab-serif-white"><b>All Products</b></h4>
            <h5 className="slab-serif-white">filter | 0 items</h5>
          </div>
          <div className="books-container">
            
          </div>
        </div>
      </div>
    )
  }
}

export default AllBooks;