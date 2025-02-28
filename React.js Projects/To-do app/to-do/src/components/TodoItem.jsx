import React from 'react';
import '//style.css';

const TodoItem = (props) => {
  return (
    <li className='todo-item'>
        <span>
        <input id='inp' type="checkbox" />
        <span id='todoitem' className='margin-text'>{props.text}</span>
        </span>
        <p>...</p>
       
    </li>
  )
}

export default TodoItem;