
import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
    todos: TodoReducer,
    user: UserReducer

})

export default rootReducer