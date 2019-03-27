import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class Session extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>{this.props.session.id}</td>
        <td>{this.props.session.teacher_id}</td>
        <td>{this.props.session.date}</td>
        <td>{this.props.session.time_in}</td>
        <td>{this.props.session.time_out}</td>
      </tr>
    )
  }
}

export default Session;

