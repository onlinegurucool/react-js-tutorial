import React, { useState } from "react";

const WrappedCoutner = (OriginalComponent , incWith = 1) => {
  const NewComponet = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incWith);
    };
    return (
      <OriginalComponent
        incrementCount={incrementCount}
        count={count}
        {...props} // don't forgot to add this.
      />
    );
  };
  return NewComponet;
};

export default WrappedCoutner;
