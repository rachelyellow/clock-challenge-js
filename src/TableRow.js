import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class TableRow extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    )
  }
}

export default TableRow;

