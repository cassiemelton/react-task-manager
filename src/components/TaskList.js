import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (!tasks.length) return <p>No tasks yet.</p>;

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
