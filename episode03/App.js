import React, { useState } from "react"
import ReactDOM from "react-dom/client"

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter Game</h1>
            <h2>Current Count: { count }</h2>
            <button onClick={increment} >Increment++</button>
            <button onClick={decrement} >Decrement--</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);