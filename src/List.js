import React, { Component } from "react"
import axios from "axios"

import Item from "./Item"

const baseUrl = "https://blooming-headland-75151.herokuapp.com"

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}/lists/${this.props.match.params.id}/todos`)
      .then( response => {
        this.setState({ items: response.data });
      })
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

  render() {
    return (
      <div>
        <h1 className="h2">List <em>{this.props.match.params.id}</em></h1>

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
