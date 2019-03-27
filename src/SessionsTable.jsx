import React, { Component } from 'react'
import TableBody from "./TableBody.jsx";
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class SessionsTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Session</th>
            <th>Teacher</th>
            <th>Date</th>
            <th>Time In</th>
            <th>Time Out</th>
          </tr>
        </thead>
        <TableBody sessions={this.props.sessions} />
      </Table>
    )
  }
}
export default SessionsTable;


