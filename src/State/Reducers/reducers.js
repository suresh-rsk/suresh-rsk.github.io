import {combineReducers} from 'redux'
import ListReducer from './ListReducer'

const Reducers=combineReducers({
    List:ListReducer
})
export default Reducers