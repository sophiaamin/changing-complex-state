import React, { useState } from "react";

function App() {
  // store object to handle state. setFullName, will set the values for new Object
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFullName(prevValue => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: prevValue.firstName,
          lastName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {/* fetching props out of fullName object */}
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          // controlled component - holds the latest state
          value={fullName.firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
