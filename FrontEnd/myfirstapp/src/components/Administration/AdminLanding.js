import React, { Component } from "react";

class AdminLanding extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="outline-box">
              <h1 className="slab-serif centered-text"><b>Admin Dashboard</b></h1>
              <hr/>
              <ul>
                <li>
                  <a href="/pendingpublishers" className="black-link">
                    Approve/Deny pending publisher applications
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLanding;