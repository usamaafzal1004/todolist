import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCompleted, setShowCompleted] = useState(true); // Added state for showing completed tasks

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      setTasks(storedTasks);
      setPersonalTasks(storedTasks);
    } else {
      fetchTasks();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(personalTasks));
  }, [personalTasks]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6');
      const data = await response.json();
      setTasks(data);
      setPersonalTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = (task) => {
    if (task.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    const newTask = { id: Date.now(), title: task, completed: false };
    setTasks([...tasks, newTask]);
    setPersonalTasks([...personalTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setPersonalTasks(personalTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    const updatedPersonalTasks = personalTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setPersonalTasks(updatedPersonalTasks);
  };

  const editTask = (taskId, newTitle) => {
    if (newTitle.trim() === '') {
      alert('Task title cannot be empty!');
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);

    const updatedPersonalTasks = personalTasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setPersonalTasks(updatedPersonalTasks);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    setPersonalTasks(filteredTasks);
  };

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTasks = personalTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTasksByCompletion = showCompleted
    ? filteredTasks
    : filteredTasks.filter((task) => !task.completed);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <input type="text" placeholder="Search tasks" value={searchQuery} onChange={handleSearch} />
      <label htmlFor="showCompleted">Show Completed:</label>
      <input
        type="checkbox"
        id="showCompleted"
        checked={showCompleted}
        onChange={handleToggleCompleted}
      />
      <TaskList
        tasks={filteredTasksByCompletion}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
      />
    </div>
  );
};

export default HomePage;
