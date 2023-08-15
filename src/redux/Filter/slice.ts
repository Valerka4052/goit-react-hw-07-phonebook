import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {InitialFilterType} from "../../types"

const initialState: InitialFilterType = "";

export const myFilterSlice = createSlice({
  name: 'myFilter',
  initialState,
  reducers: {
    getFlter(state, action:PayloadAction<string>) {
      return state = action.payload;
    },
  }
});
export const { getFlter } = myFilterSlice.actions;
