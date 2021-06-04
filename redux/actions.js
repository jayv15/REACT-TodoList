let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  } ,
  completeTodo: function(id){
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },
  deleteTodo: function(id){
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },
  creatNewUserId: function() {
    return {
      type: 'CREAT_NEW_ID',
      id: Math.round(Math.random()* 100)
    }
  }
}

export default actions
