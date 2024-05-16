import { combineReducers } from '@reduxjs/toolkit';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  question: questionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;