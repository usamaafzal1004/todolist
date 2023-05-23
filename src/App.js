import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import './App.css';

const App = () => {
  const addTask = (task) => {
    console.log('Adding task:', task);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTaskPage addTask={addTask} />} /> {/* Pass the addTask function */}
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
};

export default App;
