import { combineReducers } from 'redux';
import { DanceReducer } from './DanceReducer';
import {MainTopicReducer} from './MainTopicReducer';
const rootReducer = combineReducers({
    DanceReducer, MainTopicReducer
})
export default rootReducer;