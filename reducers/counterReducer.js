//Tạo 1 reducer counterReducer: làm nhiệm vụ update state counter mỗi khi có action click

import {INCREASE, DECREASE} from '../actions/types';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
    return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}