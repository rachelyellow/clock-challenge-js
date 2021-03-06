import React, { Component } from 'react'
import './App.css'
import PunchCard from "./PunchCard.jsx"
import SessionsTable from "./SessionsTable.jsx"
import Edit from "./Edit.jsx"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teachers: [],
      sessions: []
    }
  }

  componentWillMount() {
    axios.get('/api/clock_challenge/admin').then((response) => {
      this.setState({ sessions: response.data })
    })
    .catch(function(error) {
      console.log(error)
    })
    axios.get('/api/clock_challenge').then((response) => {
      this.setState({ teachers: response.data })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" render={(props) => <PunchCard {...props} sessions={this.state.sessions} teachers={this.state.teachers} />} exact />
            <Route path="/admin" render={(props) => <SessionsTable {...props} sessions={this.state.sessions} teachers={this.state.teachers} />} exact />
            <Route path="/admin/sessions/:id/edit" render={(props) => <Edit {...props} sessions={this.state.sessions} teachers={this.state.teachers} exact />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
