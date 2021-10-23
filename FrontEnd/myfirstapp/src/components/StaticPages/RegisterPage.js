import axios from "axios";
import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      username: "",
      accountType: "customer", // This form creates customer users
      address: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };

    this.onChange = this.onChange.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  createAccount(e) {
    e.preventDefault()

    // Create new user object to send in backend API call
    const newUser = {
      fullName: this.state.fullName,
      username: this.state.username,
      accountType: "customer",
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }

    axios.post("http://localhost:8080/api/v1/users/register", newUser)
      .then(res => {
        // API call was succesful; redirect to homepage
        this.props.history.push("/")
        alert("Account successfully created")
      })
      .catch(err => {
        // API call was unsuccessful; stay on this page
        alert("Something went wrong while creating your account. Please check \
               that you have filled out all fields correctly and try again.")
      })
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="narrow-outline-box margin-bottom-big">
                <h1 className="slab-serif centered-text"><b>Sign Up</b></h1>
                <p className="slab-serif centered-text">Create an account</p>
                <form>
                  <div className="form-group">
                    <b>Name</b>
                    <input
                      className="form-control form-control-lg"
                      name="fullName"
                      placeholder="Full Name"
                      value={this.state.fullName}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Email Address</b>
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      name="username"
                      placeholder="Email Address"
                      value={this.state.username}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Delivery Address</b>
                    <input
                      className="form-control form-control-lg"
                      placeholder="124 La Trobe St, Melbourne"
                      name="address"
                      value={this.state.address}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Phone Number</b>
                    <input
                      className="form-control form-control-lg"
                      placeholder="0400000000"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Password</b>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <b>Confirm Password</b>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <button className="btn btn-primary" onClick={this.createAccount}>
                    Create Account
                  </button>
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