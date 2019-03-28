import React, { Component } from 'react'
import EditForm from './EditForm'
import Loading from "./Loading.jsx"


class Edit extends Component {
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
          <EditForm sessions={this.props.sessions} teachers={this.props.teachers} match={this.props.match} />
        }
        
      </div>
    )
  }
}

export default Edit

