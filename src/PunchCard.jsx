import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from 'moment';

class PunchCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usercode: '',
      valid: false
    }
  }

  componentDidMount() {
    console.log('punchcard component mounted')
  }

  updateEntry = event => {
      this.setState({ usercode: event.target.value })
    }
    
  handleSubmit = event => {
    event.preventDefault()
    const pin = parseInt(this.state.usercode)
    // validates the pin
    this.props.teachers.forEach(function(teacher) {
      if (teacher.user_code === pin) {
          axios.post('/api/clock_challenge/sessions', {
            date: moment().format('L'),
            time_in: moment().format('LT')
          })
      }
    })
    // return self.state.valid
  }

  // validate  = () => {
  //   const pin = parseInt(this.state.usercode)
  //   this.props.teachers.forEach(function(teacher) {
  //     if (teacher.user_code === pin) {
  //       return true
  //     }
  //   })
  //   return false
  // }
    
  // signin = event => {
  //   if (this.state.valid) {
  //     console.log(moment())
  //     // axios.post('/sessions', {
        
  //       // })
  //     } else {
  //       console.log('user code does not exist in database.')
  //     }
  //     // this.setState({ usercode: '' })
  //   }

  // signout = () => {
  //   axios.patch
  // }

  render() {
    return (
      <div class="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}> 
        <Card.Body>
          <h5 class="card-title">SunnyVille Child Care ☀️</h5>
          <form>
            <input id="userid" type="password" value={this.state.usercode} onChange={this.updateEntry}></input>
            <br/>
            <Button type="submit" variant="success" size="lg" onClick={this.handleSubmit}>IN</Button>
            <Button type="submit" variant="danger" size="lg">OUT</Button>
          </form>
          <Button variant="info" size="sm" >Admin</Button>
        </Card.Body>
      </div>
    )
  }
}
export default PunchCard;