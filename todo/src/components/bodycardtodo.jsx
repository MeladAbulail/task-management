import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTasks, addTask, deleteTask } from '../redux/actions';

const BodyCardTodo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tasks');
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddTask = async () => {
    try {
      const response = await axios.post('http://localhost:3001/tasks', {
        title: newTask,
      });

      dispatch(addTask(response.data));
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${taskId}`);
      dispatch(deleteTask(taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Todo List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {task.title}{' '}
            <button
              style={{
                backgroundColor: '#ff6961',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default BodyCardTodo;