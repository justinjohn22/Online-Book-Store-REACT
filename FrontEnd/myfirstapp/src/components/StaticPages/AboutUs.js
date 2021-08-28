import React, { Component } from 'react'

class AboutUs extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="outline-box centered-text">
              <h1 className="slab-serif"><b>About Us</b></h1>
              <br/>
              <p style={{ maxWidth: 800 + "px" }}>
                <b>Bookeroo</b> is a platform where you can sell and share the books you love.
                <br/>
                <br/>
                Whether you're looking for something new or trying to rediscover an old favourite,
                you'll find the book you're looking for on Bookeroo. With so many sellers ranging
                from the biggest publishers to the smallest independent bookstores to other
                bookworms like you, you'll never run out of new books to read.
                <br/>
                <br/>
                With books avaiable either new or used, and at all price ranges, there really is
                something for everyone on Bookeroo.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs;