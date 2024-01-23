// Assignment No-1 -TodoList

import React, { useState } from 'react';
import './App.css'; 

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editTodo !== null) {
        // Edit existing todo
        const updatedTodos = todos.map((todo, index) =>
          index === editTodo ? newTodo : todo
        );
        setTodos(updatedTodos);
        setEditTodo(null);
      } else {
        // Add new todo
        setTodos([...todos, newTodo]);
      }
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditTodo(null);
  };

  const deleteAllTodos = () => {
    setTodos([]);
    setEditTodo(null);
  };

  const editSelectedTodo = (index) => {
    setNewTodo(todos[index]);
    setEditTodo(index);
  };

  return (
    <div className="todo-container">
      <div className="header">Todo List</div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>{editTodo !== null ? 'Edit Todo' : 'Add Todo'}</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div className="action-buttons">
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => editSelectedTodo(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button className="delete-all-btn" onClick={deleteAllTodos}>
          Delete All Todos
        </button>
      )}
    </div>
  );
};

export default TodoList;

