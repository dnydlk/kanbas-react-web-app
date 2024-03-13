import React, { useState } from "react";

function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
        className="btn btn-success">
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
        className="btn btn-danger ms-1">
        Down
      </button>
      <br />
      <br />
    </div>
  );
}
export default Counter;
