import React, { useState } from "react";

const HowerCount = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return <h2 onMouseOver={incrementCount}>Hovered {count} time</h2>;
};

export default HowerCount;
