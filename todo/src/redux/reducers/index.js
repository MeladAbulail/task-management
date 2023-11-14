
import { combineReducers } from 'redux';
import { addTask, deleteTask } from '../actions'; // Update the path accordingly
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export { addTask, deleteTask, rootReducer };