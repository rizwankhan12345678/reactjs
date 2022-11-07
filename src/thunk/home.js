import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../services/axiosclient';
import { endpoints } from '../services/endPoints';
import actions from '../actions/action';
    
const getProductsThunk = createAsyncThunk(
    actions.getProductsThunk,
    async (params, thunkAPI) => {
        const response = await axiosClient.get('https://fakestoreapi.com/' + endpoints.products, {
            params: params
        });
        return response.data;
    }
);

const getPaginateList = createAsyncThunk(
    actions.getPaginateList,
    async (params, thunkAPI) => {
        const response = await axiosClient.get('https://api.instantwebtools.net/v1/passenger', {
            params: params
        });
        return response.data;
    }
);

export {
    getProductsThunk,
    getPaginateList
};