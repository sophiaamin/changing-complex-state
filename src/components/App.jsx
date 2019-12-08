import React, { useState } from "react";

function App() {
  // store object to handle state. setFullName, will set the values for new Object
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    console.log(event.target.value);
    const newValue = event.target.value;
    const inputName = event.target.name;
    // console.log(newValue);
    // console.log(inputName);
    setFullName(prevValue => {
      console.log(prevValue);
      if (inputName === "fName") {
        return {
          firstName: newValue,
          lastName: prevValue.lastName
        };
      } else if (inputName === "lName") {
        return {
          firstName: prevValue.firstName,
          lastName: newValue
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
          // value={fullName.firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          // value ={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
