import React, { useState } from "react";

function ColorToggle() {
  // color sätts först till "red"
  const [color, setColor] = useState("red");

  // Funktion för att växla färg mellan röd och blå
  function toggleColor() {
    setColor(color === "red" ? "blue" : "red");
  }

  return (
    <div>
      {/* style-attributet styrs av värdet i state */}
      <h2 style={{ color }}>Text med färg: {color}</h2>
      <button onClick={toggleColor}>Byt färg</button>
    </div>
  );
}

export default ColorToggle;
