import React from "react"; // Importerar React

// Tar emot props: namn, hastighet och funktioner för ändring och inskickning
function SpaceshipForm({
  newName,
  newSpeed,
  onNameChange,
  onSpeedChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      {/* Inputfält för skeppets namn */}
      <input
        type="text"
        placeholder="Skeppsnamn"
        value={newName}
        onChange={onNameChange}
        required
      />

      {/* Inputfält för skeppets hastighet */}
      <input
        type="number"
        placeholder="Hastighet"
        value={newSpeed}
        onChange={onSpeedChange}
        required
      />

      {/* Knapp för att skicka formuläret */}
      <button type="submit">Lägg till skepp</button>
    </form>
  );
}

export default SpaceshipForm; // Exporterar komponenten
