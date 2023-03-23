import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://641bfdd29b82ded29d5d49e1.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    'myContacts/fetchContacts',
    async function (_, thunkAPI) {
        try {
            const response = await axios(`contacts/`)
            if (response.statusText !== 'OK') {
                throw new Error(response.statusText);
            };
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.statusText);
        };
    },
);

export const addContact = createAsyncThunk(
    'myContacts/adddContact',
    async function ({name,phone}, thunkAPI) {
        try {
            const response = await axios.post("contacts/",{name,phone});
            if (response.statusText !== 'Created') {
                throw new Error(response.statusText);
            };
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.statusText);
        };
    },
);

export const removeContact = createAsyncThunk(
    'myContacts/removeContact',
    async function (id, thunkAPI) {
        try {
            const response = await axios.delete(`contacts/${id}`);
            if (response.statusText !== 'OK') {
                throw new Error(response.statusText);
            };
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.statusText);
        }
    },
);
