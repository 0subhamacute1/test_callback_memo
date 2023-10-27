import React, { useState, useCallback, useMemo } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <div style={{ border: "2px solid red", padding: "50px", margin: "10px" }}>
        <h1>parent</h1>
        <input onChange={(e) => setName(e.target.value)} placeholder="name" />
        <input onChange={(e) => setAge(e.target.value)} placeholder="age" />
        <Child1 />
        <Child2 name={name} />
      </div>
    </>
  );
};

export default App;
