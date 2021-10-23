import React, {Component, useEffect} from 'react'
import ViewBooks from './ViewBooks.js'
import axios from 'axios'

import '../styles/Book.css'


export class Book extends Component {


    addToCart() {
        window.location.href='/books'
    }

    viewBooks() {
        window.location.href='/books'
    }


    state = {
        book: []
    }

    getBook = () => {
        if (this.props.match.params.id){
            axios.get(`http://localhost:8080/api/v1/books/all/${this.props.match.params.id}`)
            .then((res) => {
                const book = res.data
                this.setState({book: book})
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    componentDidMount(){
        this.getBook();
    }

    render(){
        const {book} = this.state
        return(
            <div>
                {console.log(book)}
                <div className="book my-5 pt-5">
                        <button className="back-btn slab-serif-white" onClick={this.viewBooks}>
                        <p>Back</p>
                        </button>
                        <div className="book-outline-box centered-text">
                            <div className="row mt-5">
                                <div className="left-column">
                                    <img className="resize" src={book.coverImage} alt=""/>

                                </div>
                                <div className="right-column">
                                    <div className="product-description">
                                        <span className="slab-serif">{book.bookName}</span>
                                        <h1 className="slab-serif">By {book.author}</h1>
                                        <hr></hr>
                                        <p classNamew="slab-serif">{book.description}</p>
                                    </div>
                                    <div className='product-cost'>
                                        <span className="slab-serif">${book.cost}</span>
                                        <button className="addcart-btn slab-serif-white" onClick={this.addToCart}>
                                            <b>Add to Cart</b>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                </div>

            </div>
        )
    }
}

export default Book;