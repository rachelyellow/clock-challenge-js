import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Loading from "./Loading.jsx"


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
    this.setState({
      loading: false,

     })
  }
  
  updateEntry = event => {
    let newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  render() {
    return (      
      <div>
        { (this.state.sessions.length)
          ? 
          <Loading />
          :
          <form>
            <Table className="table" responsive>
              <thead>
                <tr>
                  <th>{'Session '}{this.props.match.params.id}</th>
                  <th></th>
                  <th><Button variant="danger" size="sm">Delete Entry</Button></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Teacher</td>
                  <td>{console.log(this.props.teachers)}</td>
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
                  <td></td>
                  <td><input id="timeIn" className="editform" type="text" value={this.state.time_in} onChange={this.updateEntry}></input></td>
                </tr>
                <tr>
                  <td>OUT</td>
                  <td></td>
                  <td><input id="timeOut" className="editform" type="text" value={this.state.time_out} onChange={this.updateEntry}></input></td>
                </tr>
                <tr>
                  <td>-</td>
                  <td><Button href="/admin" variant="info" >Back</Button></td>
                  <td><Button variant="info" >Submit</Button></td>
                </tr>
              </tbody>
            </Table>
          </form>
        }
        
      </div>
    )
  }
}

export default EditForm

