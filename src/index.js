import React from "react";
import ReactDOM from "react-dom";

import App from './App';

ReactDOM.render(
    <App temp="123" /> ,
    document.getElementById("root")
);


// // without jsx
// ReactDOM.render(
//     React.createElement("div", null, ` Hello World`),
//     document.getElementById("root")
// );