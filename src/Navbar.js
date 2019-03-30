import React, { Component } from "react"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">TODO lists</a>
        <input className="form-control form-control-dark w-100" type="text" placeholder="List" aria-label="List" />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn btn-primary">Create new</button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
