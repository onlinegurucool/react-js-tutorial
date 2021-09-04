import React from "react";
import WrappedCoutner from "./WrappedCounter";

const ClickedCounter = (props) => {
  const { incrementCount, count } = props;

  console.log({ logPropsCC: props });
  return <button onClick={incrementCount}>Clicked {count} time</button>;
};

export default WrappedCoutner(ClickedCounter, 5);
