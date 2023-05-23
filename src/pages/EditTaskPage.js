import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';

const EditTaskPage = ({ tasks, editTask, history, match }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const taskId = parseInt(match.params.id);
    const selectedTask = tasks.find((task) => task.id === taskId);
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      history.push('/'); // Redirect to home page if task not found
    }
  }, [history, match.params.id, tasks]);

  const handleEditTask = (title) => {
    const updatedTask = { ...task, title };
    editTask(updatedTask);
    history.push('/');
  };

  return (
    <div>
      <h1>Edit Task</h1>
      {task && <TaskForm addNewTask={handleEditTask} initialTitle={task.title} />}
    </div>
  );
};

export default EditTaskPage;
