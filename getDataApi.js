import axios from 'axios';
import { fetchProductsSuccess } from './actions/index';
import {  useDispatch } from 'react-redux';

//


// Call api thông thường
const fetchData = async (api) => {
  const result = await axios({
    method: 'get',
    url: api
  });

  return result.data;


};

// Call api with redux
const fetchDataByRedux = async (api) => {
    //const dispatch = useDispatch();
  
    const result = await axios({
      method: 'get',
      url: api
    });
    console.log(result)

    dispatch(fetchProductsSuccess(result.data))
  
};

//
// const fetchDataByRedux = async (api) => {
//   return dispatch => {
//     fetch(api)
//     .then(result => result.json())
//     .then(result =>{
//       dispatch(fetchProductsSuccess(result.data))  
//       return result.data
//     })

//   }

// };




export default {
  fetchData,
  fetchDataByRedux
};
