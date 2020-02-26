//Tạo 1 reducer counterReducer: cung cấp state cho action và qui định hành động của action

import {
  INCREASE,
  DECREASE,
  FETCH_PRODUCTS_SUCCESS,
} from '../actions/types';



// const initialState = 0

const initialState = {
  value: 0,
  users: []
}

export default function (state = initialState, action) {
  //console.log('action',action);
  //console.log('state',state)

  switch (action.type) {
    // case INCREASE:
    //   return state + 1;

    // case DECREASE:
    //   return state - 1;

    // xử lý với payload
    case INCREASE:
      return {
        ...state,
        value: state.value + action.payload 
      }

    // xử lý không cần payload
    case DECREASE:
      return {
        ...state,
        value: state.value - 1
      }

    case FETCH_PRODUCTS_SUCCESS:
      
      return {
        ...state,
        users: action.payload
      }

    default:
      return state;
  }
}