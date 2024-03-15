import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const  STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
});

const productSlice = createSlice({
    name : "product",
    initialState : {
        data : [],
        status: STATUSES.IDLE,
    },
    extraReducers : (builder) => {
        builder
        .addCase(getData.pending, (state, action)=>{
                state.status = STATUSES.LOADING;
        })
        .addCase(getData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
        })
        .addCase(getData.rejected, (state, action) =>{
            state.status = STATUSES.ERROR;
        })
    }
});

export const extraReducers =  productSlice.actions;
export default productSlice.reducer



//thunk
export const getData = createAsyncThunk('products/fetch', async () =>{
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    return data;
})