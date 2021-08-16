import React from "react";
import WrappedCounter from "./WrappedCounter";

const HowerCount = (props) => {
  const { count, incrementCount } = props;
  return (
    <h2 onMouseOver={incrementCount}>
      Hovered {props.name} {count} time
    </h2>
  );
};

export default WrappedCounter(HowerCount, 10);
