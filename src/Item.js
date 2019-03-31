import React, { Component } from "react"

class Item extends Component {
  render() {
    return(
      <li
        data-item-id={this.props.attributes.uuid}
      >
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={() => this.props.tick(this.props.attributes)}
          id={this.props.attributes.uuid}
        />

        <label className="form-check-label" htmlFor={this.props.attributes.uuid}>
          {this.props.attributes.description}
        </label>
      </li>
    )
  }
}

export default Item
