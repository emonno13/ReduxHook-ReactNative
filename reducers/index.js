//file này có nhiệm vụ combine các reducers con thành 1 reducer duy nhất để đưa vào store

import {combineReducers} from 'redux';
import counterReducer from './counterReducer';


export default combineReducers({
  counter:counterReducer,
  
});