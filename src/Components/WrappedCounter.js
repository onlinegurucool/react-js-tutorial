import React, { useState } from "react";

const WrappedCounter = (OriginalComponent, incWith = 0) => {
  const NewComonent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incWith);
    };
    return (
      <OriginalComponent
        incrementCount={incrementCount}
        count={count}
        {...props}
      />
    );
  };
  return NewComonent;
};

export default WrappedCounter;
