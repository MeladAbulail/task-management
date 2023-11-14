import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask, deleteTask } from '../redux/actions';


const BodyCardTodo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    // Fetch tasks or any initial data here if needed
  }, []);

  const handleAddTask = (newTask) => {
    dispatch(addTask(newTask));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Todo List</h2>
      <TaskForm onAddTask={handleAddTask} />
      
      {/* Display tasks or other components as needed */}
      <div className="mt-8">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-100 p-4 mb-4 rounded-md">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-gray-500">Due Date: {task.dueDate}</p>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-white p-2 rounded-md mt-2 hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyCardTodo;