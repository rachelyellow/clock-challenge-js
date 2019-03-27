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
    console.log('punchcard component mounted', this.props)
  }

  updateEntry = event => {
    this.setState({ usercode: event.target.value })
  }
    
  handleSignIn = event => {
    event.preventDefault()
    const pin = parseInt(this.state.usercode)
    const teachers = this.props.teachers
    const thingy = this
    // validates the pin
    this.props.teachers.forEach(function(teacher) {
      if (teacher.user_code === pin) {
        axios.post('/api/clock_challenge/sessions', {
          date: moment().format('L'),
          time_in: moment().format('LT'),
          teacher_id: teachers.find(t => t.user_code === pin).id
        })
        .then(function(res) {
          thingy.setState({ usercode: '' })
          const teacherId = res.data[0].teacher_id
          console.log('logged in as', teachers.find(t => t.id === teacherId).first_name)
          // force refresh page
        })
      }
    })
    // return "invalid id"
  }

  handleSignOut = event => {
    event.preventDefault()
    const pin = parseInt(this.state.usercode)
    const teacher = this.props.teachers.find(t => t.user_code === pin)
    const sessions = this.props.sessions
    const sessionId = sessions.find(s => s.teacher_id === teacher.id && !s.time_out).id
    const thingy = this
    axios.patch(`/api/clock_challenge/sessions/${sessionId}`, {
      time_out: moment().format('LT'),
      sessionId: sessionId
    })
    .then(function(res) {
      thingy.setState({ usercode: '' })
      console.log('enjoy your evening,', teacher.first_name)
    })
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

  render() {
    return (
      <div className="card text-white bg-dark mb-3" style={{maxWidth: '30rem'}}> 
        <Card.Body>
          <h5 className="card-title">SunnyVille Child Care ☀️</h5>
          <form>
            <input id="userid" type="password" value={this.state.usercode} onChange={this.updateEntry}></input>
            <br/>
            <Button type="submit" variant="success" size="lg" onClick={this.handleSignIn}>IN</Button>
            <Button type="submit" variant="danger" size="lg" onClick={this.handleSignOut}>OUT</Button>
          </form>
          <Button href="/admin" variant="info" size="sm">Admin</Button>
        </Card.Body>
      </div>
    )
  }
}
export default PunchCard;