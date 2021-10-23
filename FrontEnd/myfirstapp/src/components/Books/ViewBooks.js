import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../styles/AllBooks.css'


function viewBook(id) {
  window.location.href='/book/' + id
}

function addToCart() {
  window.location.href='/books'
}


function ViewBooks() {
  const [books, setBooks] = useState([]) 
  const [searchTerm, setSearchTerm] = useState('')

  var count = 0
  var bookArray = []
  var id = 0
  
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/books/all")
    .then(res => {
     console.log(res)
     setBooks(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
   <div className="container-books">
        <div>
          {  
            books.filter((val)=> {
              if (searchTerm === "") {
              count = books.length
              bookArray = books 
              }
              else if (val.bookName.toLowerCase().includes(searchTerm.toLowerCase()) 
                || val.author.toLowerCase().includes(searchTerm.toLowerCase()) 
                || val.isbn.toLowerCase().includes(searchTerm.toLowerCase())) {
                bookArray[count] = val 
                count++
              }
            })
          }

          <div className="search-container">
            <input type="text" className="search-bar" placeholder="search by book name,  author,  isbn..." onChange={event => {setSearchTerm(event.target.value)}} />
          </div>
          <div className="all-products ">
            <h4 className="slab-serif-white"><b>All Products</b></h4>
            <h5 className="slab-serif-white">filter | {count} items</h5>
          </div>
          <div className="books-container">
            { 
             bookArray.map(book => {
                return (
                    <div className="image-group">
                      <div className="book-attributes">
                        <img className="cover-image" src={book.coverImage} alt="new"/>
                        <div className="name-cost">
                            <b><p className="book-name slab-serif">{book.bookName} <br /> <strong className="author">{book.author}</strong></p></b>
                            <div className="space"> </div>
                            <b><p className="slab-serif price">${book.cost} </p></b>
                        </div>  
                      </div>
                      <div className="image-btn-group">
                        <button className="view-book-btn slab-serif-white"onClick={()=> viewBook(book.id)}>
                          <b> View Book </b>
                        </button>
                        &nbsp;  
                        <button className="cart-btn slab-serif-white" onClick={addToCart}>
                          <b> Add to Cart </b>
                        </button>
                      </div>     
                    </div>
                )
              })
            }
          </div>
        </div>
      </div>
  )
}

export default ViewBooks