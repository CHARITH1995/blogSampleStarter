import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {


  handleLogout = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null)
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/products" className="navbar-item">
              Products
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div>
                <div className="buttons">
                  <a href="/register" className="button ">
                    <strong>Register</strong>
                  </a>
                  <a href="/login" className="button is-light">
                    Log in
                      </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
