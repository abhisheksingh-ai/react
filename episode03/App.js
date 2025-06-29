import React from "react"
import ReactDOM from "react-dom/client"

//element from core react 
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Heading from core React"
)
console.log("Core Heading", heading);

//JSX heading
const jsxHeading = <h1 id="jsxHeadingID">JSX Heading🤣</h1>
console.log("JSX Heading", jsxHeading);

//create root and render these headings
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(sum);