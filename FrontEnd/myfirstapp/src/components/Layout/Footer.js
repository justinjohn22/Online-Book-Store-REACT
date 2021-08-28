import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer white-text">
          <p>
            <a href="/" className="white-link">Home</a>
            <a href="/about" className="white-link">About Us</a>
          </p>
          <p>© SEPT Team 02 2021 - All Rights Reserved - BOOKEROO</p>
        </footer>
      </div>
    )
  }
}

export default Footer;