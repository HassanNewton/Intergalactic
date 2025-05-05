import React from "react"; // Importerar React

// Tar emot en funktion som props som anropas med sorteringskriteriet
function SortButtons({ onSort }) {
  return (
    <div className="sort-buttons">
      {/* Sorterar listan alfabetiskt */}
      <button onClick={() => onSort("name")}>Sortera efter namn</button>

      {/* Sorterar listan efter hastighet */}
      <button onClick={() => onSort("speed")}>Sortera efter hastighet</button>
    </div>
  );
}

export default SortButtons; // Exporterar komponenten
