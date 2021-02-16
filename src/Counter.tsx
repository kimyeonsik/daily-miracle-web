import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const onPlus = () => setCount((prev) => prev + 1);
  const onMinus = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h1> COUNTER : {count}</h1>
      <button type="button" onClick={onPlus}>
        +
      </button>
      <button type="button" onClick={onMinus}>
        -
      </button>
    </div>
  );
}

export default Counter;
