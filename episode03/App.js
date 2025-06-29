import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Toggle() {
  const [light, setLight] = useState("off");

  function toggleLight() {
    setLight(light === "on" ? "off" : "on");
  }

  return (
    <div
      style={{
        backgroundColor: light === "on" ? "yellow" : "gray",
        textAlign: "center",
      }}
    >
      <h2>
        Light is {light.toUpperCase()} {light === "on" ? "💡" : "🌑"}
      </h2>
      <button onClick={toggleLight}>
        {light === "on" ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Toggle />);
