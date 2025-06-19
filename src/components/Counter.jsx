import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(prevCount => {
      console.log("Avant décrément:", prevCount);
      if (prevCount <= 0) return 0;
      return prevCount - 1;
    });
  };

  const reset = () => setCount(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement} disabled={count <= 0}>Décrémenter</button>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default Counter;

