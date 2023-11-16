import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('http://localhost:8000/Tasks');
  return response.data;
});

export const fetchTask = createAsyncThunk('tasks/fetchTask', async (id) => {
  const response = await axios.get(`http://localhost:8000/Tasks/${id}`);
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post('http://localhost:8000/Tasks', task);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ task, id }, { dispatch, getState }) => {
  const response = await axios.put(`http://localhost:8000/Tasks/${id}`, task);
  return response.data;
});

export const updateState = createAsyncThunk('tasks/updateState', async ({ taskId, status }, { dispatch, getState }) => {
  const response = await axios.put(`http://localhost:8000/Tasks/${taskId}/${!status}`);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await axios.delete(`http://localhost:8000/Tasks/${taskId}`);
  return taskId;
});

export const fetchCompletedTasks = createAsyncThunk('tasks/fetchCompletedTasks', async () => {
  const response = await axios.get('http://localhost:8000/Tasks');
  const tasks = response.data;
  const completedTasks = tasks.filter((task) => task.status === "Completed");
  return completedTasks;
});

export const fetchPendingTasks = createAsyncThunk('tasks/fetchPendingTasks', async () => {
  const response = await axios.get('http://localhost:8000/Tasks');
  const tasks = response.data;
  const pendingTasks = tasks.filter((task) => task.status === "incomplete");
  return pendingTasks;
});

// Change createSlice to createAction
export const setFilter = createAction('tasks/setFilter');

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], completedTasks: [], pendingTasks: [], filteredTasks: [], status: 'idle', error: null, filter: { name: '', status: '', priority: '' } },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
        state.completedTasks = action.payload.filter((task) => task.status === true);
        state.pendingTasks = action.payload.filter((task) => task.status === false);
        state.filteredTasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.completedTasks = state.completedTasks.filter((task) => task.id !== action.payload);
        state.pendingTasks = state.pendingTasks.filter((task) => task.id !== action.payload);
        state.filteredTasks = state.filteredTasks.filter((task) => task.id !== action.payload);
      })
      .addCase(setFilter, (state, action) => {
        state.filter = action.payload;
        state.filteredTasks = state.tasks.filter((task) => {
          const nameMatch = task.title.toLowerCase().includes(state.filter.name.toLowerCase());
          const statusMatch = task.status.toLowerCase().includes(state.filter.status.toLowerCase());
          const priorityMatch = task.priority.toLowerCase().includes(state.filter.priority.toLowerCase());
          return nameMatch && statusMatch && priorityMatch;
        });
      });
  },
});

export default tasksSlice.reducer;