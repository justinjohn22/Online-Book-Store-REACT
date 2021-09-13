import axios from "axios"
import React, { Component } from 'react'

import { formatTimestamp } from "../../utils";

import '../styles/PendingBusinessApps.css'

class PendingBusinessApps extends Component {
  state = {
    publishers: []
  }

  componentDidMount() {
    // Get the list of users with 'pendingPublisher' account type from the backend
    axios.get("http://localhost:8080/api/v1/users/pendingpublishers")
      .then(res => {
        const publishers = res.data;
        this.setState({ publishers });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="outline-box">
              <h1 className="slab-serif centered-text">
                <b>Pending Business Applications</b>
              </h1>
              { /* Number of pending publishers */ }
              <p className="slab-serif pendingba-pendingcount">
                Pending ({this.state.publishers.length})
              </p>
              {
                // List of pending applications
                this.state.publishers.map(publisher => {
                  return (
                    <div className="row pendingba-box slab-serif">
                      <div className="col-md-8">
                        <p>
                          Name: {publisher.fullName}<br/>
                          ABN: {publisher.abn}<br/>
                          Time: {formatTimestamp(publisher.createAt)}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-danger pendingba-button">✕</button>
                        <button className="btn btn-success pendingba-button">✓</button>
                      </div>
                    </div>
                  )})
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PendingBusinessApps;