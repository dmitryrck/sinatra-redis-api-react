import React, { Component } from "react"

class Sidebar extends Component {
  render() {
    return (
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Dashboard <span class="sr-only">(current)</span>
              </a>
            </li>
            {
              this.props.lists.map( (item) => {
                return (
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      {item}
                    </a>
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
