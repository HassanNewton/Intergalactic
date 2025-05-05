import React, { useState } from "react"; // Importerar React och useState-hooken
import Spaceship from "./components/Spaceship.jsx"; // Importerar komponenten för att visa ett rymdskepp
import SpaceshipForm from "./components/SpaceshipForm"; // Importerar formulär-komponenten för att lägga till rymdskepp
import SortButton from "./components/SortButton"; // Importerar komponenten med sorteringsknappar
import "./App.css"; // Importerar CSS-styling
import ColorToggle from "./components/ColorToggle";

function App() {
  // Skapar state för listan av rymdskepp
  const [spaceships, setSpaceships] = useState([
    { id: 1, name: "Millennium Falcon", speed: 1050 },
    { id: 2, name: "Naboo N-1 Starfighter", speed: 920 },
    { id: 3, name: "TIE Interceptor", speed: 1200 },
  ]);

  // Skapar state för sorteringskriteriet
  const [sortBy, setSortBy] = useState("");

  // Skapar state för nya inputfält (namn och hastighet)
  const [newName, setNewName] = useState("");
  const [newSpeed, setNewSpeed] = useState("");

  // Funktion som loggar hastigheten och flyttar skeppet högst upp i listan
  const logSpeed = (id) => {
    const ship = spaceships.find((s) => s.id === id);
    if (ship) {
      console.log(`${ship.name} hastighet: ${ship.speed}`);
      // Flytta skeppet högst upp i listan
      const newList = [ship, ...spaceships.filter((s) => s.id !== id)];
      setSpaceships(newList);
    }
  };

  // Funktion för att sortera listan efter namn eller hastighet
  const handleSort = (criteria) => {
    let sorted = [...spaceships];
    if (criteria === "name") {
      // Sortera alfabetiskt efter namn
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "speed") {
      // Sortera efter hastighet (högst först)
      sorted.sort((a, b) => b.speed - a.speed);
    }
    setSpaceships(sorted); // Uppdatera listan
    setSortBy(criteria); // Spara sorteringskriteriet
  };

  // Funktion för att lägga till ett nytt skepp via formuläret
  const handleAddShip = (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om
    const newShip = {
      id: Date.now(), // Använder tidsstämpel som unikt ID
      name: newName,
      speed: parseInt(newSpeed), // Gör om sträng till heltal
    };
    setSpaceships([...spaceships, newShip]); // Lägg till skeppet i listan
    setNewName(""); // Töm inputfältet
    setNewSpeed(""); // Töm inputfältet
  };

  // JSX som renderas till sidan
  return (
    <div className="App">
      <h1>🚀 Intergalactic Pirate Logging</h1>

      {/* Knappar för att sortera rymdskeppen */}
      <SortButton onSort={handleSort} />

      {/* Formulär för att lägga till ett nytt skepp */}
      <SpaceshipForm
        newName={newName}
        newSpeed={newSpeed}
        onNameChange={(e) => setNewName(e.target.value)}
        onSpeedChange={(e) => setNewSpeed(e.target.value)}
        onSubmit={handleAddShip}
      />

      {/* Loopar igenom alla rymdskepp och renderar en komponent för varje */}
      {spaceships.map((ship) => (
        <Spaceship key={ship.id} ship={ship} logSpeed={logSpeed} />
      ))}

      <ColorToggle />
    </div>
  );
}

export default App; // Exporterar komponenten så den kan användas i index.js
