import React from "react";

import './Header.css';

const Header = (props) => {
    let { title, children, increment } = props;
    // let myStyle = {
    //     backgroundColor: "red",
    //     fontSize: "20px",
    //     color: "Yellow",
    // };˘
    return (
        <header title={title} 
            // style={myStyle}
        >
            <br />
            {children}
            <button onClick={() => increment()} className="btn btn-primary">Increase count</button>
        </header>
    );
};

export default Header;
