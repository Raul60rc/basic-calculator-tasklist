import React from 'react';

const Task = ({task, onDelete}) => {
  return (
    <div>
      <p>{task}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
