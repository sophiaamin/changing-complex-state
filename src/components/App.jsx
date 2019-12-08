import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFName(event) {
    setFirstName(event.target.value);
  }

  function handleLName(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}{" "}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={firstName}
          onChange={handleFName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
