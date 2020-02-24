//Tạo 1 reducer counterReducer: cung cấp state cho action và qui định hành động của action

import {
  INCREASE,
  DECREASE,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../actions/types';



// const initialState = 0

const initialState = {
  value : 0
}

export default function (state = initialState, action) {
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
      return{
        ...state,
        value: state.value - 1
      }
  

    default:
      return state;
  }
}