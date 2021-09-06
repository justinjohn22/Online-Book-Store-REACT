import React, { Component } from "react";

import '../styles/LoginPage.css'

class LoginPage extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="narrow-outline-box centered-text">
                <h1 className="slab-serif"><b>Log In</b></h1>
                <form action="dashboard.html">
                  <div className="login-text">
                    <b>Email Address</b>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                    />
                  </div>
                  <div className="login-text">
                    <b>Password</b>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                    />
                  </div>
                  <div className="login-text">
                    <input
                      type="checkbox"
                      id="remember"
                    />
                    <label for="remember"> 
                      <b>Remember Me</b>
                    </label>
                    <p>
                      <u><b>Forgot Password</b></u>
                    </p>
                  </div>
                  <input type="submit" value="SIGN IN" className="btn btn-dark btn-block mt-4" />
                </form>
                <div className="createacc-btn">
                  <a href="http://localhost:3000/register.html"><u><b>Create Account</b></u></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;