import React from 'react';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import "./App.css"
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-4">Task Management App</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </div>
  );
};

export default App;