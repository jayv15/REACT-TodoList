import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class UserInfo extends Component {
 
    handleNewId() {
        this.props.creatNewUserId()
        this.props.dispatch(actions(this.state.creatNewUserId))
    }

  render() {
    console.log(this.props)
    return (
        <li>
            
            <div>username: {this.props.user.username}</div>
            <div>id: {this.props.user.id}</div> 
            <button onClick={this.handleNewId.bind(this)}>Update with random id</button>
        </li>
        
    )
  }

}
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
