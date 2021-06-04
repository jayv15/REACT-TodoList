import React, { Component } from 'react'
import actions from '../redux/actions'
import { connect } from 'react-redux'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {

    event.preventDefault()
    console.log(this.props)
    this.props.dispatch(actions.addTodo(this.state.inputText))
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input
                type="text"
                placeholder="Type in your todo"
                value={this.state.inputText}
                onChange={this.handleChange.bind(this)}
            />
            <input type="submit" text="submit" />
        </form>
      </div>
    )
  }

}

export default connect()(TodoInput)
