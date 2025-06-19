import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) return; // bloque la décrémentation si count <= 0

    setCount(prevCount => {
      const newCount = Math.max(prevCount - 1, 0);
      console.log("Avant décrément:", prevCount, "Après décrément:", newCount);
      return newCount;
    });
  };

  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <p style={{ fontSize: 24 }}>Compteur : {count}</p>
      <button onClick={increment} style={{ marginRight: 10 }}>Incrémenter</button>
      <button onClick={decrement} disabled={count <= 0} style={{ marginRight: 10 }}>Décrémenter</button>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default Counter;
