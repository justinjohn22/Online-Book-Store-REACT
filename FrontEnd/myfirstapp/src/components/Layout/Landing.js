import React, { Component } from "react";
import { Link } from "react-router-dom";

import '../styles/Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="grey-container">
                            <h2> Welcome to BOOKEROO!  <br />
                                (the world’s best book selling/sharing service)</h2> 
                        </div>
                        <hr />
                       
                    </div>
                </div>
            </div>
    );
  }
}

export default Landing;