import React, { useState } from "react";

const ClickedCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Clicked {count} time
    </button>
  );
};

export default ClickedCounter;
