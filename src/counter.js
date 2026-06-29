import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
export default Counter;