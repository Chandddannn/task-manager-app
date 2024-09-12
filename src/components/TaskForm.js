import React, { useState } from 'react';
import './styles/button.css';
import './styles/common.css';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='input-field'
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        style={{
            borderRadius: '8px',
            border: '3px solid black',
            padding: '10px',
            margin: '10px',
        }}
      />
      <button  type="submit">
      <span class="button_top"> Add Task </span></button>
    </form>
  );
}

export default TaskForm;
