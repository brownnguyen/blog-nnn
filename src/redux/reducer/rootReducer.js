import { combineReducers } from 'redux';
import { DanceReducer } from './DanceReducer';
import { MainTopicReducer } from './MainTopicReducer';
import {TravelReducer} from './TravelReducer';
const rootReducer = combineReducers({
    DanceReducer, MainTopicReducer, TravelReducer
})
export default rootReducer;