import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <Counter min={0} max={99} />
    </div>
  );
}

export default App;
