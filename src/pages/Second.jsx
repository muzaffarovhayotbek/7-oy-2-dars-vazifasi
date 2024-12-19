import React, { useState, useEffect } from 'react';
import './Second.css';

function Second() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

  function handleDelete(id) {
    if (confirm('Rostdan ham o`chirmoqchimisiz?')) {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const NewForm = {
      name,
      email,
      number,
      id: Date.now(),
    };
    const updatedData = [...data, NewForm];
    setData(updatedData);
    setName('');
    setEmail('');
    setNumber('');
  }

  return (
    <div className="second">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="Enter number"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="form-list">
        {data.length > 0 &&
          data.map((form) => (
            <div className="form-item" key={form.id}>
              <h3 className="form-title">
                Name: <strong>{name}</strong>
              </h3>
              <h3 className="form-title">
                Email: <strong>{email}</strong>
              </h3>
              <h3 className="form-age">Yosh: {number}</h3>
              <button
                className="delete-button"
                onClick={() => handleDelete(form.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Second;
