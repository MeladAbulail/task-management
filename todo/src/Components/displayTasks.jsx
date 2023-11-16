// DisplayTasks.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, setFilter } from '../Redux/TaskSlice';
import TaskFilter from './filterTasks';

const DisplayTasks = () => {
  const dispatch = useDispatch();
  const { tasks, status, error, filter } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleUpdate = (taskId) => {
    console.log(`Update task with id ${taskId}`);
    // Placeholder for update logic
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)).then(() => {
      dispatch(fetchTasks());
    });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const applyFilter = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const filteredTasks = tasks.filter((task) => {
    const nameMatch = task.title.toLowerCase().includes(filter.name.toLowerCase());
    const statusMatch = task.status.toLowerCase().includes(filter.status.toLowerCase());
    const priorityMatch = task.priority.toLowerCase().includes(filter.priority.toLowerCase());

    return nameMatch && statusMatch && priorityMatch;
  });

  return (
    <div>
      <TaskFilter applyFilter={applyFilter} />

      <h2>Task List</h2>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="text-white bg-blue-500">
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Due Date</th>
            <th className="px-4 py-2 border">Priority</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className="border">
              <td className="px-4 py-2 border">{task.title}</td>
              <td className="px-4 py-2 border">{task.description}</td>
              <td className="px-4 py-2 border">{task.dueDate}</td>
              <td className="px-4 py-2 border">{task.priority}</td>
              <td className="px-4 py-2 border">{task.status}</td>
              <td className="px-4 py-2 border">
                <button
                  className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={() => handleUpdate(task.id)}
                >
                  Update
                </button>
                <button
                  className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTasks;