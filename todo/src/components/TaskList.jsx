import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/tasks';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);

  const filteredTasks = tasks.filter(
    (task) =>
      (filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'pending' && !task.completed)) &&
      task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="w-full max-w-md mx-auto my-8 p-8 bg-gray-200 rounded shadow-md">
      {filteredTasks.map((task) => (
        <li key={task.id} className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
            className="mr-2"
          />
          <span className={`mr-2 ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
            {task.title} - {task.description} - {task.dueDate} - Priority: {task.priority}
          </span>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;