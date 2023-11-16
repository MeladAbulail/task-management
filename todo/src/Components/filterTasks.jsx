import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../Redux/TaskSlice';

const TaskFilter = () => {
  const dispatch = useDispatch();

  const [filter, setFilterState] = useState({
    name: '',
    status: '',
    priority: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterState((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Task Filter</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={filter.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block mb-2 font-bold text-gray-700">
          Status:
        </label>
        <select
          id="status"
          name="status"
          value={filter.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Status</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block mb-2 font-bold text-gray-700">
          Priority:
        </label>
        <select
          id="priority"
          name="priority"
          value={filter.priority}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button
        onClick={handleFilter}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default TaskFilter;