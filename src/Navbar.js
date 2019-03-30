import React, { Component } from "react"

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: "",
    }
    this.updateValue = this.updateValue.bind(this)
  }

  createList () {
    // alert(`create list child: ${this.state.value}`)
    this.props.attachList(this.state.value)
    this.setState({ value: "" })
  }

  updateValue (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">TODO lists</a>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="List"
          value={this.state.value}
          onChange={this.updateValue}
          aria-label="List"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button
              className="btn btn-primary"
              onClick={() => { this.createList() }}
            >
              Create new
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
