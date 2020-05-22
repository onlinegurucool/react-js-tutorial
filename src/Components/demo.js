import React, { useState } from "react";
import LifeCycleMethod from "./LifeCycleMethod";

const Demo = () => {
    let [random, setRandom] = useState(Math.round(Math.random() * 100));
    let [show, setShow] = useState(true);

    let toggle = () => setShow(!show);

    return (
        <>
            <button
                className="btn btn-primary mr-2"
                onClick={() => setRandom(Math.round(Math.random() * 100))}
            >
                Change other state{" "}
                <span className="badge badge-light">{random}</span>
            </button>
            <button className="btn btn-primary mr-2" onClick={toggle}>
                {" "}
                Show / Hide Life Cycle Demo
            </button>
            <div className="mt-2">
                {show && <LifeCycleMethod state={show} />}
            </div>
        </>
    );
};

export default Demo;
