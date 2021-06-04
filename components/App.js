import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <UserInfo user={this.props.user} creatNewUserId={this.props.actions.creatNewUserId}/>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}
function mapDisptchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(App)
