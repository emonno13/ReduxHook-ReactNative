//Tạo 1 reducer counterReducer: cung cấp state cho action và qui định hành động của action

import {
  INCREASE,
  DECREASE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_MORE,
  SET_PAGE_POSITION
} from '../actions/types';



// const initialState = 0

const initialState = {
  value: 0,
  users: [],
  articles: [],
  pagePosition: 1
}

export default function (state = initialState, action) {
  //console.log('action',action);


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

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload
      }
    case FETCH_ARTICLES_MORE :
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      }
    case SET_PAGE_POSITION:
      return {
        ...state,
        pagePosition:  action.payload
      }
    default:
      return state;
  }
}