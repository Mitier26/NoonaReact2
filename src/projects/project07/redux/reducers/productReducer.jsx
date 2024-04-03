import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null,
};

// 액션이름 , 할일
export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact2/products?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        // 아래 있는 실패 케이스를 강제로 호출한다.
        thunkApi.rejectWithValue(error.message);
    }
});

export const fetchProductDetail = createAsyncThunk('product/fetchDetail', async (id, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/Mitier26/NoonaReact2/products/${id}`;
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    extraReducers: (builder) => {
        // 외부라이브러리에 의해 호출되는 것, 비동기
        builder
            .addCase(fetchProducts.pending, (state) => {
                // 데이터 오는 중
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // 데이터 받기 성공
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                // 실패
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchProductDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedItem = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
