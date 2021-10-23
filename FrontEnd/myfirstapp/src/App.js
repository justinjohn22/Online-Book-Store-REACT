import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutUs from "./components/StaticPages/AboutUs";
import AdminLanding from "./components/Administration/AdminLanding";
import Footer from "./components/Layout/Footer.js";
import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import LoginPage from "./components/StaticPages/LoginPage";
import PendingBusinessApps from "./components/Administration/PendingBusinessApps";
import RegisterPage from "./components/StaticPages/RegisterPage";
import ViewBooks from "./components/Books/ViewBooks";
import Book from "./components/Books/Book";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Footer />

            {
              //Public Routes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/register.html" component={RegisterPage} />
            <Route exact path="/login.html" component={LoginPage} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/books" component={ViewBooks} />
            <Route exact path="/book/:id"  component={Book} />

            {
              //Private Routes
            }
            <Route exact path="/adminlanding" component={AdminLanding} />
            <Route exact path="/pendingpublishers" component={PendingBusinessApps} />
           
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;