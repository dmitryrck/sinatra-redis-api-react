import React, { Component } from "react"

import { Link } from "react-router-dom"

class Sidebar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Dashboard <span className="sr-only">(current)</span>
              </a>
            </li>
            {
              this.props.lists.map( (item) => {
                return (
                  <li key={item.uuid} className="nav-item">
                    <Link to={`/lists/${item}`} className="nav-link">
                      {item}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Sidebar
