import React from 'react';

function Counter() {
  let [counter, setCounter] = React.useState(0);

  function increasingTheCounter() {
    if (counter >= 99) {
      setCounter(99);
    } else setCounter((counter += 1));
  }

  function reducingTheCounter() {
    if (counter <= 0) {
      setCounter(0);
    } else setCounter((counter -= 1));
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
