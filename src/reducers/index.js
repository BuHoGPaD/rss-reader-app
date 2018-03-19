import { combineReducers } from 'redux';
import counter from './counter'
import feed from './feed'

const rootReducer = combineReducers({
    counter,
    feed
})
export default rootReducer
