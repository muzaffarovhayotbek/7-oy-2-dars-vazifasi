import React, { useState } from 'react';

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterSecond, setCounterSecond] = useState(0);
  const [counterThree, setCounterThree] = useState(0);

  const handleIncrement = (counter, setCounter) => {
    setCounter(counter + 1);
  };

  const handleDecrement = (counter, setCounter) => {
    setCounter(counter - 1);
  };

  const handleReset = (setCounter) => {
    setCounter(0);
  };

  const res = counterOne + counterSecond + counterThree;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Counter One</h2>
        <p className="text-xl text-center mb-4">{counterOne}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleIncrement(counterOne, setCounterOne)}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleDecrement(counterOne, setCounterOne)}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleReset(setCounterOne)}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Counter Two</h2>
        <p className="text-xl text-center mb-4">{counterSecond}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleIncrement(counterSecond, setCounterSecond)}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleDecrement(counterSecond, setCounterSecond)}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleReset(setCounterSecond)}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Counter</h2>
        <p className="text-xl text-center mb-4">{counterThree}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleIncrement(counterThree, setCounterThree)}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleDecrement(counterThree, setCounterThree)}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleReset(setCounterThree)}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="text-center mt-6 text-xl font-semibold">Total: {res}</div>
    </div>
  );
}

export default Counter;
