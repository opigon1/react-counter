import React from 'react';
import './index.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <main className='App'>
      <Counter min={0} max={99} />
    </main>
  );
}

export default App;
