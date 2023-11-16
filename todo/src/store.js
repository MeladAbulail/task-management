import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Redux/TaskSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
