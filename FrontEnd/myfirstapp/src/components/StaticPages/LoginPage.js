import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";

import { login } from "../../actions/securityActions";

import '../styles/LoginPage.css'

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      window.location.pathname = "/adminlanding";
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      window.location.pathname = "/adminlanding";
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(LoginRequest);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="narrow-outline-box centered-text">
                <h1 className="slab-serif"><b>Log In</b></h1>
                <form action="/">
                  <div className="login-text">
                    <b>Email Address</b>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.email
                      })}
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="login-text">
                    <b>Password</b>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password
                      })}
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
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
      </div >
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);


