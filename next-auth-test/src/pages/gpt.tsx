
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [effects, setEffects] = useState([]);

  const addEffect = () => {
    setCount(count + 1);
    setEffects([...effects, `Effect ${count + 1}`]);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {effects.map((effect, index) => (
        <p key={index}>{effect}</p>
      ))}
      <button onClick={addEffect}>
        Increment and add effect
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};


export default Counter;
