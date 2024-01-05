import React, { useState, useCallback, useMemo, useEffect } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  // console.log("parent");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let memoAge = useMemo(() => age, []);
  let memoName = useMemo(() => name, [name]);

  const handleDelete = useCallback((data) => {
    console.log("delete", data);
    handleConsole();
  }, []);

  const handleConsole = () => {
    console.log("oooooooooooo");
  };
  return (
    <>
      <div style={{ border: "2px solid red", padding: "50px", margin: "10px" }}>
        <h1>parent</h1>
        <input onChange={(e) => setName(e.target.value)} placeholder="name" />
        <input onChange={(e) => setAge(e.target.value)} placeholder="age" />
        <input placeholder="random" />
        <Child1 abc={"hello"} />
        <Child2
          memoName={memoName}
          handleDelete={handleDelete}
          memoAge={memoAge}
        />
      </div>
    </>
  );
};

export default App;
