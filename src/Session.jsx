import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


class Session extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <tr>
        <td>{this.props.session.id}</td>
        <td>{this.props.session.date}</td>
        <td>{this.props.teachers.find(t => t.id === this.props.session.teacher_id).first_name}{' '}
        {this.props.teachers.find(t => t.id === this.props.session.teacher_id).last_name}</td>
        <td>{this.props.session.time_in}</td>
        <td>{this.props.session.time_out}</td>
        <td><Button href={this.props.editLink} variant="info" size="sm">Edit</Button></td>
      </tr>
    )
  }
}

export default Session

