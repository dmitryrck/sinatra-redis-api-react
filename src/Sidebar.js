import React, { Component } from "react"

import { Link } from "react-router-dom"

function Sidebar(props) {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {
            props.lists.map( item => {
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

export default Sidebar
