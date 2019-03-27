import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import TableBody from "./TableBody.jsx";
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class SessionsTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h4 className="pagetitle" >View All Shifts</h4>
        <Button href="/" variant="info" size="sm">Back</Button>        
        <Table className="table" striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Session</th>
              <th>Date</th>
              <th>Teacher</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th></th>
            </tr>
          </thead>
          <TableBody sessions={this.props.sessions} teachers={this.props.teachers} />
        </Table>
      </div>
    )
  }
}
export default SessionsTable;


