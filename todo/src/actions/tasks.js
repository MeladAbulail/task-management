import * as actionTypes from './actionTypes';

export const addTask = (task) => ({
  type: actionTypes.ADD_TASK,
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: actionTypes.TOGGLE_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: actionTypes.DELETE_TASK,
  payload: taskId,
});

export const setFilter = (filter) => ({
  type: actionTypes.SET_FILTER,
  payload: filter,
});

export const setSearch = (searchText) => ({
  type: actionTypes.SET_SEARCH,
  payload: searchText,
});