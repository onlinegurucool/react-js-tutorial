import React from "react";
import WrappedCounter from "./WrappedCounter";
const ClickedCounter = (props) => {
  const { count, incrementCount } = props;
  console.log({ props });
  return <button onClick={incrementCount}>Clicked {props.name} {count} time</button>;
};

export default WrappedCounter(ClickedCounter, 5);
