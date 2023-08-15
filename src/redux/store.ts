import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { myContactsSlice } from './Contacts/slice';
import { myFilterSlice } from './Filter/slice';

const rootReducer = combineReducers({
  contacts: myContactsSlice.reducer,
  filter: myFilterSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;