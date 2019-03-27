import React, { Component } from 'react';
import './App.css';
import PunchCard from "./PunchCard.jsx";
import SessionsTable from "./SessionsTable.jsx";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teachers: [],
      sessions: []
    }
  }

  componentDidMount() {
    axios.get('/api/clock_challenge').then((response) => {
      this.setState({ teachers: response.data })
    })
    .catch(function(error) {
      console.log(error)
    })
    axios.get('/api/clock_challenge/admin').then((response) => {
      this.setState({ sessions: response.data })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <PunchCard teachers={this.state.teachers} />
        <SessionsTable sessions={this.state.sessions} teachers={this.state.teachers} />
      </div>
    );
  }
}

export default App;
