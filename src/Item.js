import React, { Component } from "react"

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      done: this.props.attributes.done,
    }
    this.handleTick = this.handleTick.bind(this)
  }

  handleTick () {
    this.props.tick(this.props.attributes)
    this.setState({
      ...this.state,
      done: !this.state.done,
    })
  }

  render() {
    return(
      <li
        data-item-id={this.props.attributes.uuid}
      >
        <input
          className="form-check-input"
          type="checkbox"
          checked={this.state.done && "checked"}
          onChange={this.handleTick}
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
