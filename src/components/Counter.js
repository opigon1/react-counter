import React from 'react';

function Counter() {
  let [counter, setCounter] = React.useState(0);

  function increasingTheCounter() {
    setCounter((counter += 1));
  }

  function reducingTheCounter() {
    setCounter((counter -= 1));
  }

  return (
    <div className='counter'>
      <button onClick={reducingTheCounter}>-</button>
      <p>{counter}</p>
      <button onClick={increasingTheCounter}>+</button>
    </div>
  );
}

export default Counter;
