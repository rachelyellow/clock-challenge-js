import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Loading from "./Loading.jsx"
import axios from 'axios'


class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teacherName: '',
      timeIn: '',
      timeOut: '',
      loading: true,
      sessions: [],
      teachers: []
    }
  }

  componentDidMount(){
    const self = this;
    axios.get('/api/clock_challenge').then((response) => {
      self.setState({ teachers: response.data })
    })
    .catch(function(error) {
      console.log(error)
    })
    axios.get('/api/clock_challenge/admin').then((response) => {
      self.setState({ sessions: response.data })
    })
    .catch(function(error) {
      console.log(error)
    })
  }
  
  updateEntry = event => {
    let newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  render() {
    console.log(this.props)
    return (      
      <form>
        <Table className="table" responsive>
          <thead>
            <tr>
              <th>{'Session '}{this.props.match.params.id}</th>
              <th>DATE{this.props.sessions.map(function(session) {
                if (session.id === this.props.match.params.id) {
                  return session.date
                }
              }, this)}</th>
              <th><Button variant="danger" size="sm" disabled>Delete Entry</Button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teacher</td>
              <td>Teacher Name</td>
              <td>
                <select id="teacherName" className="editform" type="text" value={this.state.teacherName} onChange={this.updateEntry}>
                  {this.props.teachers.map((teacher, index) => (
                    <option key={index} value={teacher.id} >{teacher.first_name}{' '}{teacher.last_name}</option>
                  ))}
                </select>
              </td>              
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
              <td>-</td>
              <td><Button href="/admin" variant="info" >Back</Button></td>
              <td><Button variant="info" disabled>Submit</Button></td>
            </tr>
          </tbody>
        </Table>
      </form>
    )
  }
}

export default EditForm

