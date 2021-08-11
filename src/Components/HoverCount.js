import React, { useState } from "react";

const HowerCount = () => {
  const [count, setCount] = useState(0);

  return (
    <h2
      onMouseOver={() => {
        setCount(count + 1);
      }}
    >
      Clicked {count} time
    </h2>
  );
};

export default HowerCount;
