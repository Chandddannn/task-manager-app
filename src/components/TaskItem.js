import React from 'react';
import './styles/button.css';
import './styles/common.css';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li style={{marginTop: '20px'}}> 
    <label className='checkbox-btn' style={{ }}> 
    <label for="checkbox"></label>
      <input
       id="checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span class="checkmark"></span>
      </label>
      <h4 style={{margin:0, padding:0 ,  textDecoration: task.completed ? 'line-through' : 'none'}}>{task.text}</h4>
      <button   onClick={() => deleteTask(task.id)}>
      <div class="button_top" style={{backgroundColor: 'red'}}> Delete </div></button>
    </li>
  );
}


export default TaskItem;
