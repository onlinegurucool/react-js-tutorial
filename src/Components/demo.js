import React, { useState } from "react";
import LifeCycleMethod from "./LifeCycleMethod";

const Demo = () => {
    let [random, setRandom] = useState(Math.round(Math.random() * 100));
    let [show, setShow] = useState(true);

    let toggle = () => setShow(!show);
    let genRandom = () => setRandom(Math.round(Math.random() * 100));

    return (
        <>
            <button className="btn btn-primary mr-2" onClick={genRandom}>
                Change other state
                <span className="badge badge-light ml-2">{random}</span>
            </button>
            <button className="btn btn-primary mr-2" onClick={toggle}>
                Show / Hide Life Cycle Demo
            </button>
            <div className="mt-2">
                {show && <LifeCycleMethod state={show} />}
            </div>
        </>
    );
};

export default Demo;
