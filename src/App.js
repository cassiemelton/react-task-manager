import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]); // consistent shape: {id,text,completed}

  // Load tasks from localStorage (ensure each has an id)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    const withIds = saved.map(t => ({
      id: t.id ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      text: t.text,
      completed: !!t.completed
    }));
    setTasks(withIds);
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTask = { id: `${Date.now()}-${crypto?.randomUUID?.() || Math.random().toString(16).slice(2)}`, text: trimmed, completed: false };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
