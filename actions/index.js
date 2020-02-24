//index.js chứa các action (nó sẽ export ra cho các class có thể gọi tới các function bên trong nó)

import {
    INCREASE,
    DECREASE,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from './types';


//type : tên action, payload, giá trị tham số được truyền vào action
export const counterIncrease = (data) => ({
    type: INCREASE,
    payload: data
});
export const counterDecrease = () => ({ type: DECREASE });

export const fetchProductsPending = () => {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

export const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}
