import React from 'react';
import TaskForm from '../components/TaskForm';

const AddTaskPage = ({ addTask }) => {
  const handleAddTask = (title) => {
    const task = {
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(task);
  };

  return (
    <div>
      <h1>Add Task</h1>
      <TaskForm addNewTask={handleAddTask} /> {/* Use addNewTask prop */}
    </div>
  );
};

export default AddTaskPage;
