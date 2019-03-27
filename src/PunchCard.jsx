import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import moment from 'moment'

class PunchCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      teachers: [],
      usercode: 0
    }
  }

  componentDidMount() {
    axios.get('/api/clock_challenge').then((response) => {
      console.log(response.data)
      this.setState({ loading: false, teachers: response.data })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  updateEntry = event => {
      this.setState({ usercode: event.target.value })
      console.log(event.target.value)
      // event.target.value = '';
  }

  validateCode = () => {
    this.state.teachers.forEach(function(teacher) {
      if (teacher.user_code === this.state.usercode) {
        return true
      }
      return false
    })
  }

  signin = () => {
    if (true) {
      console.log(moment())
      // axios.post('/sessions', {
        
      // })
    } else {
      console.log('user code does not exist in database.')
    }
  }

  // signout = () => {
  //   axios.patch
  // }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="userid">User ID </label>
          <input name="userid" onKeyUp={this.updateEntry}></input>
          <br/>
          <Button variant="success" size="lg">IN</Button>
          <Button variant="danger" size="lg">OUT</Button>
        </form>
        <Button variant="info">Admin</Button>
      </div>
    )
  }
}
export default PunchCard;