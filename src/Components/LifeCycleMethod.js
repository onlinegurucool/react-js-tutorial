import React, { useEffect, useState } from "react";
const LifeCycleMethod = () => {
    let [temp,setTemp] = useState(3)
    useEffect(() => {
        console.log("Render");
        return () => {
            console.log("UnMounting");
        };
    },[temp]);

    useEffect(() => {
        console.log("2nd use Effect")
    },[])
    return <>
        <div>This is LifeCycleMethod Component</div>
        <h4>Temp: {temp} </h4>
        <button onClick={() => setTemp(23)}>
            Set Temp
        </button>
    </>;
};

export default LifeCycleMethod;
