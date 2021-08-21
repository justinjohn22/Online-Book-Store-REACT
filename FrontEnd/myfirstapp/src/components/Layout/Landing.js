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
                <div className="row">
                    <div className="col-md-12">
                        <div class="grey-container">
                          <div className="main-text">
                            <h1><b>Welcome to BOOKEROO! </b></h1>  
                            <h4>(the world’s best book selling/sharing service)</h4>
                            <br />
                            <h5><b>Which option suits you?</b></h5>
                            <button onClick={clickMe}>
                              View Books
                            </button>
                            &nbsp; &nbsp; &nbsp; 
                            <button onClick={clickMe1}>
                              Sell Books
                            </button>
                          </div> 
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default Landing;