import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Thunk is included by default
});

export type AppDispatch = typeof store.dispatch;
export default store;