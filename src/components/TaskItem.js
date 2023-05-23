import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, editTask, toggleTaskCompletion }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdatedTitle(task.title);
  };

  const handleSave = () => {
    editTask(task.id, updatedTitle);
    setEditing(false);
  };

  const handleComplete = () => {
    toggleTaskCompletion(task.id);
  };

  const handleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  return (
    <li className="task-item">
      {editing ? (
        <div className="task-item-editing">
          <input type="text" value={updatedTitle} onChange={handleChange} />
          <div className="task-item-editing-buttons">
            <button className="task-item-button-save" onClick={handleSave}>
              Save
            </button>
            <button className="task-item-button-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="task-item-view">
          <span className={`task-item-title${task.completed ? ' completed' : ''}`}>
            {task.title}
          </span>
          <div className="task-item-buttons">
            <button className="task-item-button-complete" onClick={handleComplete}>
              {task.completed ? 'Completed' : 'Complete'}
            </button>
            <button className="task-item-button-edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="task-item-button-delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
