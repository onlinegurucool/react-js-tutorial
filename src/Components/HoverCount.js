import React from "react";
import WrappedCoutner from "./WrappedCounter";

const HowerCount = (props) => {
  const { incrementCount, count } = props;

  return <h2 onMouseOver={incrementCount}>Hovered {count} time</h2>;
};

export default WrappedCoutner(HowerCount,10);
