import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { lists: [], }

    this.attachList = this.attachList.bind(this)
  }

  attachList (name) {
    const originalList = this.state.lists

    this.setState({
      ...this.state,
      lists: [...originalList, name],
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar attachList={this.attachList} />

        <div class="container-fuild">
          <div class="row">
            <Sidebar lists={this.state.lists} />

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
