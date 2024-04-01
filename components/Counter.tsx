"use client";
import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      Num: {num}
      <button onClick={() => setNum((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setNum((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
