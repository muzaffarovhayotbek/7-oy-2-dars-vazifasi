import React, { useState, useEffect } from 'react';
import './Todo.css';

function Todo() {
  const [TodoName, setTodoName] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todo')) || [];
    setData(savedTodo);
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(data));
  }, [data]);

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      'Rostdan ham to-do listni ochirmoqchimisiz?'
    );
    if (confirmDelete) {
      setData((prevData) => prevData.filter((item) => item.id !== id));
    }
  }

  function validate() {
    if (TodoName.length < 6) {
      alert('To-do list eng kamida 6 ta belgi bo`lishi kerak');
      return false;
    }
    return true;
  }

  function handleSave(e) {
    e.preventDefault();

    if (!validate()) return;

    const user = {
      TodoName,
      id: Date.now(),
    };
    setData((prevData) => [...prevData, user]);

    setTodoName('');
  }

  return (
    <div className="todo-app">
      <div className="logo">
        <h1>To-do List</h1>
      </div>

      <form id="form">
        <input
          value={TodoName}
          onChange={(e) => setTodoName(e.target.value)}
          type="text"
          placeholder="Enter to-do list"
        />
        <button onClick={handleSave}>Saqlash</button>
      </form>

      <div id="todo-items">
        {data.length > 0 &&
          data.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.TodoName}</h3>
              <button onClick={() => handleDelete(user.id)}>delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Todo;
