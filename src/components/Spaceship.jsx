import React from "react"; // Importerar React

// Funktionell komponent som tar emot ett skepp-objekt och en funktion som props
function Spaceship({ ship, logSpeed }) {
  return (
    <div className="spaceship">
      {/* Visar namn och hastighet */}
      <h2>{ship.name}</h2>
      <p>Hastighet: {ship.speed}</p>

      {/* När man klickar på knappen anropas funktionen logSpeed med skeppets ID */}
      <button onClick={() => logSpeed(ship.id)}>Logga hastighet</button>
    </div>
  );
}

export default Spaceship; // Exporterar komponenten
