import React, {useState, useEffect, Component} from 'react'
import axios from "axios";
import BookService from './BookService';

class ShopOwner extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       bookname: '',
       author: '',
       cost: '',
       description: '',
       image_url: '',
       isbn: ''
    }

    this.handleBooknameChange = this.handleBooknameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleISBNChange = this.handleISBNChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleBooknameChange = (event) => {
    this.setState({
      bookname: event.target.value
    });
  }
  
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    });
  }

  handleCostChange = (event) => {
    this.setState({
      cost: event.target.value
    });
  }

  handleImageChange = (event) => {
    this.setState({
      image_url: event.target.value
    });
  }

  handleISBNChange = (event) => {
    this.setState({
      isbn: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let newBook = {
      bookName: this.state.bookname,
      author: this.state.author,
      description: this.state.description,
      cost: this.state.cost,
      isbn: this.state.isbn,
      coverImage: this.state.image_url
    }

    console.log('book => ' + JSON.stringify(newBook));

    BookService.createBook(newBook).then(res => {
      this.props.history.push('/books');
    })

    // axios.post("http://localhost:8080/api/v1/books/all", newBook)
    //   .then(res => {
    //     // redirect to all books if successful 
    //     this.props.history.push("/")
    //     alert("Book added")
    //   })
    //   .catch(error => {
    //     alert("Whoops, something went wrong while adding a new book.")
    //   });
  }

  render () {
    return(
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <br /><br /><br />
        <h4 className="slab-serif"><b>Sell Books!</b></h4>
          <div className="outline-box centered-text">
            
            <form>
              <div>
                <label>Book Name</label>
                <input 
                  type='text' 
                  value={this.state.bookname} 
                  onChange={this.handleBooknameChange}
                />
              </div>

              <div>
                <label>Author</label>
                <input 
                  type='text' 
                  value={this.state.author} 
                  onChange={this.handleAuthorChange}
                />
              </div>

              <div>
                <label>Cost</label>
                <input 
                  type='text' 
                  value={this.state.cost} 
                  onChange={this.handleCostChange}
                />
              </div>

              <div>
                <label>Embedded Image Url</label>
                <input 
                  type='text' 
                  value={this.state.image_url} 
                  onChange={this.handleImageChange}
                />
              </div>

              <div>
                <label>Description</label>
                <textarea 
                  value={this.state.description} 
                  onChange={this.handleDescriptionChange}
                />
              </div>

              <div>
                <label>ISBN</label>
                <input 
                  value={this.state.isbn} 
                  onChange={this.handleISBNChange}
                />
              </div>

              <button type="btn btn-success" onClick={this.handleSubmit}>
                Add New Book
              </button>
            </form>
          
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ShopOwner;