import React, { Component } from 'react'

import '../styles/PendingBusinessApps.css'

class PendingBusinessApps extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="outline-box">
              <h1 className="slab-serif centered-text">
                <b>Pending Business Applications</b>
              </h1>
              { 
                // Pending applications are listed here; examples included below
                // In future, these will be read from the backend
              }
              <p className="slab-serif pendingba-pendingcount">Pending (2)</p>
              <div className="row pendingba-box slab-serif">
                <div className="col-md-8">
                  <p>
                    Name: Resonating Reads<br/>
                    ABN: 95 827 121 617<br/>
                    12/08/2021 10:55 PM
                  </p>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-danger pendingba-button">✕</button>
                  <button className="btn btn-success pendingba-button">✓</button>
                </div>
              </div>
              <div className="row pendingba-box slab-serif">
                <div className="col-md-8">
                  <p>
                    Name: Reading Rodney's Online Store<br/>
                    ABN: 94 827 231 617<br/>
                    11/08/2021 3:45 PM
                  </p>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-danger pendingba-button">✕</button>
                  <button className="btn btn-success pendingba-button">✓</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PendingBusinessApps;