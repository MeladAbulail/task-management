import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/TaskSlice';
import { fetchTasks } from '../Redux/TaskSlice';  // Import the fetchTasks action

const AddTodoitems = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAddTask = () => {
    if (taskTitle && taskDescription) {
      dispatch(
        addTask({
          title: taskTitle,
          description: taskDescription,
          dueDate: dueDate,
          priority: priority,
          status: 'Incomplete', 
        })
      );

      // Refetch tasks after adding a new task
      dispatch(fetchTasks());

      setTaskTitle('');
      setTaskDescription('');
      setDueDate('');
      setPriority('low');
    } else {
      console.error('Task title and description are required.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Add Task</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Title:
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border rounded"
                value={taskTitle}
                onChange={handleTitleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Description:
              <textarea
                className="w-full px-3 py-2 mt-1 border rounded"
                value={taskDescription}
                onChange={handleDescriptionChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Due Date:
              <input
                type="date"
                className="w-full px-3 py-2 mt-1 border rounded"
                value={dueDate}
                onChange={handleDueDateChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Priority:
              <select
                className="w-full px-3 py-2 mt-1 border rounded"
                value={priority}
                onChange={handlePriorityChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoitems;