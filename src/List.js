import React, { Component } from "react"
import axios from "axios"

import Item from "./Item"
import generateUUID from "./generateUUID"

const baseUrl = process.env.REACT_APP_BASE_URL

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
      items: [],
    }
  }

  getItems (listUuid) {
    axios
      .get(`${baseUrl}/lists/${listUuid}/todos`)
      .then( response => {
        this.setState({ items: response.data });
      })
  }

  componentDidMount () {
    this.getItems(this.props.match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    this.getItems(nextProps.match.params.id)
  }

  tick (listUuid) {
    return item => {
      axios({
        method: "PUT",
        url: `${baseUrl}/lists/${listUuid}/todos/${item.uuid}`,
        data: { done: !item.done, }
      })
    }
  }

  createItem () {
    const listUuid = this.props.match.params.id
    const item = {
      uuid: generateUUID(),
      description: this.state.value,
      done: false,
    }

    axios({
      method: "POST",
      url: `${baseUrl}/lists/${listUuid}/todos`,
      data: item,
    })

    this.setState({
      value: "",
      items: [...this.state.items, item],
    })
  }

  updateValue = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">List <em>{this.props.match.params.id}</em></h1>
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="description"
            placeholder="TODO"
            value={this.state.value}
            onChange={this.updateValue}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => { this.createItem() }}
        >
          Add new item
        </button>

        <hr />

        <ul>
          {
            this.state.items.map(item => {
              return(
                <Item
                  key={item.uuid}
                  tick={this.tick(this.props.match.params.id)} attributes={item}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List
