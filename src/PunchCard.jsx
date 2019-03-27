import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class PunchCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      teachers: []
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