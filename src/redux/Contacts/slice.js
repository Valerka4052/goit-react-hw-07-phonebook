import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from '../../api';

export const myContactsSlice = createSlice({
    name: 'myContacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.items = action.payload;
        },
        
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [addContact.pending](state) {
            state.isLoading = true;
        },
            
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.items = [...state.items, action.payload]
        },

        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [removeContact.pending](state) {
            state.isLoading = true;
        },
            
        [removeContact.fulfilled](state, action) {
            const filteredContacts = state.items.filter((contact) => {
                return contact.id !== action.payload.id;
            });
            state.isLoading = false;
            state.items = filteredContacts
        },
    
    
        [removeContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
},
);

