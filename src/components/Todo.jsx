import React, { useState } from 'react'
import './Todo.css'

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text: input,
        id: Math.floor(Math.random() * 10),
      },
    ]);
    setInput("");
  };

  return (
    <div className='todo-container'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          className='todo-input'
          placeholder='New Todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' type='submit'>Add</button>
      </form>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id} className='todo-item'>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo