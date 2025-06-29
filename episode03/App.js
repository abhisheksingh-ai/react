import React, { useState } from "react"
import ReactDOM from "react-dom/client"

function SumComponent() {
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")

    const getSum = (a, b) => {
        const num1 = Number(a) || 0;
        const num2 = Number(b) || 0;
        return num1 + num2;
    }

    return (
        <div>
            <h1 id="sum">Enter Two Number</h1>
            <input
                placeholder="First Number"
                value={first}
                onChange={e => setFirst(e.target.value)}
            />

            <input
                placeholder="Second Number"
                value={second}
                onChange={e => setSecond(e.target.value)}
            />

            <h1>Result is { getSum(first, second) }</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< SumComponent />)