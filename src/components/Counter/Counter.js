import React, { useRef, useState, useEffect } from 'react';
import './Counter.css'; // Подключаем файл стилей

function Counter({ max, min }) {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef();

  function onChange(e) {
    setCounter(Number(e.target.value));
  }

  function increasingTheCounter() {
    if (counter >= max) {
      setCounter(99);
    } else {
      counterRef.current.classList.add('counter__input_animate_increase');
      setCounter((prevCounter) => prevCounter + 1);
      setTimeout(() => {
        counterRef.current.classList.remove('counter__input_animate_increase');
      }, 300); // Длительность анимации
    }
  }

  function reducingTheCounter() {
    if (counter <= min) {
      setCounter(0);
    } else {
      setCounter((prevCounter) => prevCounter - 1);
      counterRef.current.classList.add('counter__input_animate_decrease');
      setTimeout(() => {
        counterRef.current.classList.remove('counter__input_animate_decrease');
      }, 300); // Длительность анимации
    }
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
          ref={counterRef}
        />
      </div>
      <button className='counter__btn' onClick={increasingTheCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
