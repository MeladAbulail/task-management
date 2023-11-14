import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/tasks';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: '', description: '', dueDate: '', priority: 'low' });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...task, id: Date.now(), completed: false }));
    setTask({ title: '', description: '', dueDate: '', priority: 'low' });
  };

  return (
    <form className="w-full max-w-sm mx-auto my-8 p-8 bg-gray-200 rounded shadow-md">
      <label className="block text-sm font-semibold text-gray-700">Title:</label>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        className="block w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <label className="block text-sm font-semibold text-gray-700 mt-4">Description:</label>
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        className="block w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <label className="block text-sm font-semibold text-gray-700 mt-4">Due Date:</label>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="block w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <label className="block text-sm font-semibold text-gray-700 mt-4">Priority:</label>
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="block w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;