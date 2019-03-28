import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Router } from 'react-router-dom'
import axios from 'axios'

class EditForm extends Component {
  constructor() {
    super()
    this.state = {
      teacherName: '',
      timeIn: '',
      timeOut: ''
    }
  }

  componentDidMount() {
    console.log(this.state, this.props)
  }
  
  updateEntry = event => {
    let newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <form>
          <Table className="table" responsive>
            <thead>
              <tr>
                <th>{this.props.match.params.id}</th>
                <th>Teacher Name</th>
                <th>Delete Button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teacher</td>
                <td>teacher name</td>
                <td><input id="teacherName" className="editform" type="text" value={this.state.teacherName} onChange={this.updateEntry}></input></td>
              </tr>
              <tr>
                <td>IN</td>
                <td>time_in</td>
                <td><input id="timeIn" className="editform" type="text" value={this.state.time_in} onChange={this.updateEntry}></input></td>
              </tr>
              <tr>
                <td>OUT</td>
                <td>time_out</td>
                <td><input id="timeOut" className="editform" type="text" value={this.state.time_out} onChange={this.updateEntry}></input></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>update button</td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
    )
  }
}

export default EditForm

