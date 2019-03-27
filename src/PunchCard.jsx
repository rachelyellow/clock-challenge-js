import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class PunchCard extends Component {
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