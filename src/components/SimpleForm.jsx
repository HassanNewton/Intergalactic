import React, { useState } from "react";

function SimpleForm() {
  // State för formulärfält
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Hantera ändring av namn
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Hantera ändring av email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Hantera formulärets submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulär skickat:", { name, email });
    alert(`Hej ${name}, vi har sparat din email: ${email}`);
  };

  return (
    <div>
      <h2>Registreringsformulär</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Namn:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}

export default SimpleForm;
