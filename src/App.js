import React from "react";

import Header from './components/Header';

const App = () => {
    // function to increment i
    var i = 0;
    let inc = () => {
        i++
        console.log({i})
    }

    return (
        <>
            <Header title="I am Header" increment={inc}>
                I am child of header
            </Header>
            <div>Hello World</div>
        </>
    )
};

export default App;
