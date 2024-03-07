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
      <button className='counter__btn' onClick={reducingTheCounter}>
        −
      </button>
      <div className='counter__input-wrapper'>
        <input
          className='counter__input'
          type='text'
          value={counter}
          onChange={onChange}
          maxLength={2}
        />
      </div>
      <button className='counter__btn' onClick={increasingTheCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
