import React, { Component } from 'react'
import Session from "./Session.jsx";
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class TableBody extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tbody>
        {this.props.sessions.map((session, index) => 
          <Session session={session} teachers={this.props.teachers} key={index} />
        )}
      </tbody>
    )
  }
}

export default TableBody;