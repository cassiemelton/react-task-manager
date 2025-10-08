import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        aria-label="Toggle complete"
      />
      <span style={{ 
        textDecoration: task.completed ? 'line-through' : 'none', 
        flexGrow: 1 
      }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} aria-label="Delete task">🗑️</button>
    </div>
  );
}

export default TaskItem;
