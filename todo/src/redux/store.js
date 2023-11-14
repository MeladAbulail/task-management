import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;