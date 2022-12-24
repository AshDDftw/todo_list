import React, { useState } from 'react';
import './todo.css';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodoChange(event) {
    setNewTodo(event.target.value);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  function handleRemoveTodo(index) {
    setTodos(todos.filter((_todo, i) => i !== index));
  }

  return (
    <html>
        <div className="d">TODO LIST</div>
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => handleRemoveTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    </html>
  );
}

export default TodoList;
