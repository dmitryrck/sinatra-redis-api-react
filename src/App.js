import React, { Component } from "react"
import { Route } from "react-router-dom"

import "./App.css"
import Topbar from "./Topbar"
import Sidebar from "./Sidebar"
import List from "./List"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: (JSON.parse(localStorage.getItem("lists")) || []),
    }
    this.attachList = this.attachList.bind(this)
  }

  attachList (name) {
    const originalList = this.state.lists
    const localLists = JSON.parse(localStorage.getItem("lists")) || []

    localStorage
      .setItem(
        "lists",
        JSON.stringify([...localLists, name])
      )

    this.setState({
      ...this.state,
      lists: [...originalList, name],
    })
  }

  render() {
    return (
      <div className="App">
        <Topbar attachList={this.attachList} />

        <div className="container-fuild">
          <div className="row">
            <Sidebar lists={this.state.lists} />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <Route exact path="/lists/:id" component={List} />
                <Route exact path="/" render={() => ""} />
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App
