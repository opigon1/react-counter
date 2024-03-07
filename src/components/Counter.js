import React from 'react';

function Counter({ max, min }) {
  let [counter, setCounter] = React.useState(0);

  function onChange(e) {
    setCounter(Number(e.target.value));
  }

  function increasingTheCounter() {
    if (counter >= max) {
      setCounter(99);
    } else setCounter((counter += 1));
  }

  function reducingTheCounter() {
    if (counter <= min) {
      setCounter(0);
    } else setCounter((counter -= 1));
  }

  return (
    <div className='counter'>
      <button onClick={reducingTheCounter}>-</button>
      <input type='text' value={counter} onChange={onChange} maxLength={2} />
      {/* <p>{counter}</p> */}
      <button onClick={increasingTheCounter}>+</button>
    </div>
  );
}

export default Counter;
