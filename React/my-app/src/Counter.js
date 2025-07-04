import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Counter</h1>
        <div className="counter-display">{count}</div>
        <div className="counter-buttons">
          <button onClick={decrement} className="btn btn-decrement">-</button>
          <button onClick={reset} className="btn btn-reset">Reset</button>
          <button onClick={increment} className="btn btn-increment">+</button>
        </div>
      </div>
    </div>
  );
}
