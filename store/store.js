//tạo 1 file index.js trong thư mục store

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk),
);

export default store;