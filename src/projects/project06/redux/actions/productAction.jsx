function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact2/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // setProductList(data);
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
    };
}

// 아아 함수로 되어 있어 다른 것을 만들필요가 없다.
function getProductsDetail(id) {
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact2/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();

        dispatch({ type: 'GET_PRODUCT_DETAIL', payload: { data } });
    };
}

export const productAction = { getProducts };
export const productDetailAction = { getProductsDetail };
