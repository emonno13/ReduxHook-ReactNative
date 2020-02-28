//index.js chứa các action (nó sẽ export ra cho các class có thể gọi tới các function bên trong nó)

import {
    INCREASE,
    DECREASE,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_MORE,
    SET_PAGE_POSITION
} from './types';


//type : tên action, payload, giá trị tham số được truyền vào action
export const counterIncrease = (data) => ({
    type: INCREASE,
    payload: data
});

export const counterDecrease = () => ({ 
    type: DECREASE 
});

export const fetchProductsSuccess = (users) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: users,
    }
}

export const fetchArticlesSuccess = (articles) => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles,
    }
}

export const fetchArticlesMore = (more) => {
    return {
        type: FETCH_ARTICLES_MORE,
        payload: more,
    }
}

export const setPagePostion = (pagePosition) => {
    return {
        type: SET_PAGE_POSITION,
        payload: pagePosition
    }
}