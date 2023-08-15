import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from '../../api';
import { ContactResponseType, InitialStateContactsSliceType } from '../../types';


const initialState: InitialStateContactsSliceType = {
    items: [],
    isLoading: false,
    error: {
        message: "",
    },
};

export const myContactsSlice = createSlice({
    name: 'myContacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Array<ContactResponseType>>) => {
                state.isLoading = false;
                state.items = action.payload;
                state.error.message = "";
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === "string") {
                    state.error.message = action.payload;
                }
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action: PayloadAction<ContactResponseType>) => {
                state.isLoading = false;
                state.items = [...state.items, action.payload];
                state.error.message = "";
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === "string") {
                    state.error.message = action.payload;
                }
            })
            .addCase(removeContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeContact.fulfilled, (state, action: PayloadAction<ContactResponseType>) => {
                const filteredContacts = state.items.filter((contact) => {
                    return contact.id !== action.payload.id;
                });
                state.isLoading = false;
                state.items = filteredContacts;
                state.error.message = "";
            })
            .addCase(removeContact.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === "string") {
                    state.error.message = action.payload;
                }
            })
    },
});

