import React, { useState } from "react";

const ClickedCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return <button onClick={incrementCount}>Clicked {count} time</button>;
};

export default ClickedCounter;
