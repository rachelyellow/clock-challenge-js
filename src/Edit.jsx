import React, { Component } from 'react'
import EditForm from './EditForm'
import Loading from "./Loading.jsx"


class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.setState({
      loading: false,

     })
  }

  render() {
    return (      
      <div>
        { (this.state.loading)
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

