// TaskFilter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setSearch } from '../actions/tasks';

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="w-full max-w-sm mx-auto my-8 p-8 bg-gray-200 rounded shadow-md">
      <label className="block text-sm font-semibold text-gray-700">Filter:</label>
      <select
        onChange={handleFilterChange}
        className="block w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <label className="block text-sm font-semibold text-gray-700 mt-4">Search:</label>
      <input
        type="text"
        onChange={handleSearchChange}
        className="block w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default TaskFilter;