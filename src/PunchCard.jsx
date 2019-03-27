import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class PunchCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      teachers: [],
      usercode: ""
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

  validateCode = () => {
    this.state.teachers.forEach(function(teacher) {
      if (teacher.user_code === this.state.usercode) {
        return true
      }
      return false
    })
  }

  signin = () => {
    axios.post('/sessions', {
      
    })
  }

  signout = () => {
    axios.patch
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="userid">User ID </label>
          <input name="userid"></input>
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