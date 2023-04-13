import React, { useState } from "react";

const Form = () => {
  //use state
  const [current, setCurrent] = useState({
    name: "",
    age: " ",
  });

  function handleInput(e) {
    const name = e.target.name;
    const val = e.target.value;
    setCurrent((prev) => {
      return { ...prev, [name]: val         };
    });
  }
  return (
    <>
      <div>
        <form>
          <label htmlFor="name">User Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter the name"
            name="name"
            value={current.name}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="age">age</label>
          <br></br>
          <input
            type="number"
            placeholder="Enter the age"
            name="age"
            value={current.age}
            onChange={handleInput}
          />
        </form>
      </div>
    </>
  );
};

export default Form;
