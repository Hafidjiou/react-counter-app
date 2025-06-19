// src/App.js

import React from 'react';
import Counter from './components/Counter'; // ✅ Chemin corrigé

function App() {
  return (
    <div className="App">
      <h1>Mon Application de Compteur</h1>
      <Counter />
    </div>
  );
}

export default App;
