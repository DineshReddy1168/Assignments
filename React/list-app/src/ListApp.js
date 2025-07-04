import React, { useState } from 'react';
import './ListApp.css';

export default function ListApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim() === '') return;
    setItems([...items, input.trim()]);
    setInput('');
  };

  const handleDeleteItem = (indexToDelete) => {
    const newItems = items.filter((_, index) => index !== indexToDelete);
    setItems(newItems);
  };

  return (
    <div className="list-container">
      <div className="list-card">
        <h1 className="list-title">List Rendering App</h1>

        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item"
            className="list-input"
          />
          <button onClick={handleAddItem} className="list-button">Add</button>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              {index + 1}. {item}
              <button
                className="delete-button"
                onClick={() => handleDeleteItem(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
