import React, { Component } from "react";
import { Link } from "react-router-dom";

import '../styles/Landing.css'

function clickMe() {
  alert('Book collection page has not been added yet!')
}

function clickMe1() {
  alert('Shop owner page hasnt been created yet!')
}

class Landing extends Component {

  render() {
    return (
      <div className="container">
        <body>
          <div className="row">
            <div className="col-md-12">
              <div className="grey-container">
                <div className="main-text">
                  <br />
                  <h1 className="slab-serif"><b>Welcome to BOOKEROO!</b></h1>    
                  <hr />
                  <h5><b>Which option suits you?</b></h5>
                  <br />
                  <button onClick={clickMe}>
                    <b> VIEW BOOKS </b>
                  </button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <button onClick={clickMe1}>
                  <b> SELL BOOKS </b>
                  </button>                       
                </div>         
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Landing;