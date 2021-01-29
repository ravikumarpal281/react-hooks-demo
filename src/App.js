import React, { useState } from "react";
import "./App.css";

function App() {
  const initalName = {
    firstName: "",
    lastName: "",
  };
  const [count, setCount] = useState(0);
  const [name, setName] = useState(initalName);
  const [items, setItem] = useState([]);

  const AddItem = () => {
    setItem([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>
        Counter {count}
      </button>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>
      <p>
        First Name is : {name.firstName} And last name is : {name.lastName}
      </p>

      <hr></hr>
      <button onClick={AddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
