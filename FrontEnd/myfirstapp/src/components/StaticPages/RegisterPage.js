import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
    constructor(){
        super();

    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
      if (nextProps.errors){
          this.setState ({
              errors: nextProps.errors
          });

      }
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.createNewUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    }
  render() {
      const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="outline-box centered-text">
              <h1 className="slab-serif"><b>Sign Up</b></h1>
              <p className="slab-serif">Create your Account</p>
              <form action="create-profile.html">
              <b>Name</b>
                <div className="form-group">
                  <input
                    type="text"
                    className= {classnames("form-control form-control-lg", {
                        "is-invalid": errors.name
                    }) }
                    //placeholder="Name"
                    name="name"
                    value= {this.state.name}
                    required
                  />
                  {errors.name && (
                      <div className= "invalid-feedback">{errors.name}</div>
                  )}
                  <b>Email Address</b>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    //placeholder="Email Address"
                    name="email"
                  />
                  <b>Password</b>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    //placeholder="Password"
                    name="password"
                  />
                  <b>Confirm Password</b>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password2"
                  />
                </div>
                <input type="submit" value="REGISTER" className="btn btn-dark btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Register;