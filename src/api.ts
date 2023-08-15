import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactResponseType, ContactType } from "./types";


axios.defaults.baseURL = 'https://641bfdd29b82ded29d5d49e1.mockapi.io/';

export const fetchContacts = createAsyncThunk<ContactResponseType[],void,{rejectValue:string}>(
    'myContacts/fetchContacts',
    async function (_, thunkAPI) {
        try {
            const response = await axios(`contacts/`)
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue("server error");
        };
    },
);

export const addContact = createAsyncThunk<ContactResponseType,ContactType,{rejectValue:string}>(
    'myContacts/addContact',
    async function ({name,phone}, thunkAPI) {
        try {
            const response = await axios.post("contacts/",{name,phone});
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue("server error");
        };
    },
);

export const removeContact = createAsyncThunk<ContactResponseType,string,{rejectValue:string}>(
    'myContacts/removeContact',
    async function (id, thunkAPI) {
        try {
            const response = await axios.delete(`contacts/${id}`);
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue("server error") ;
        };
    },
);
