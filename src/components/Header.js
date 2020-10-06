import React from "react";

const Header = (props) => {
    // logging props
    console.log(props);
    // destructing props into variables
    let { title, children, increment } = props;
    return (
        <header title={title}>
            <br />
            {children}
            <button onClick={() => increment()}>Increase count</button>
        </header>
    );
};

export default Header;
