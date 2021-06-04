
  
  let TodoReducer = function(user={}, action) {
    switch (action.type) {
        case 'CREAT_NEW_ID':
      return {
          username: user.username,
          id: action.id
        }
      
        default: 
        return user;
    }
  }
  
  export default TodoReducer
  