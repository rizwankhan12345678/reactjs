import { createSlice } from "@reduxjs/toolkit";
import {
    getProductsThunk,
    getPaginateList
} from "../thunk";

const initialState = {
    products: [],
    list: [],
    listCount: 0,
    listCurrentPage: 0,
    isLoading: false
}

const HomeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        handlePageUpdate: (state, action) => {
            state.listCurrentPage = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProductsThunk.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProductsThunk.rejected, (state, action) => {
                state.isLoading = false;
            })
        builder
            .addCase(getPaginateList.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getPaginateList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload.data;
                state.listCount = action.payload.totalPages;
            })
            .addCase(getPaginateList.rejected, (state, action) => {
                state.isLoading = false
            })
    }
})

const { actions, reducer } = HomeSlice;
export default reducer;
export const { handlePageUpdate } = actions;