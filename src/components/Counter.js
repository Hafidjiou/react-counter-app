import React, { useState } from 'react';
import './Counter.css'; // on suppose que tu as un fichier de style

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button
        onClick={() => setCount(count - 1)}
        disabled={count <= 0}
        className={count <= 0 ? 'btn disabled' : 'btn'}
      >
        Décrémenter
      </button>
      <span className="count">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="btn"
      >
        Incrémenter
      </button>
    </div>
  );
}

export default Counter;

