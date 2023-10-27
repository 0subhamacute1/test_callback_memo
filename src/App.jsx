import React, { useState, useCallback, useMemo, useEffect } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let memoAge = useMemo(() => age, [age]);
  let memoName = useMemo(() => name, [age]);

  const handleEdit = useCallback((row) => {
    console.log(row, "editing");
  }, []);

  const handleDelete = () => {
    console.log("delete");
  };

  useEffect(() => {
    console.log("mem");
  }, [memoName]);
  return (
    <>
      <div style={{ border: "2px solid red", padding: "50px", margin: "10px" }}>
        <h1>parent</h1>
        <input onChange={(e) => setName(e.target.value)} placeholder="name" />
        <input onChange={(e) => setAge(e.target.value)} placeholder="age" />
        <Child1 />
        <Child2
          name={memoName}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {/* 
        case1 not wrap in memo             : rerender  (child1)
        case2 wrap in memo and no props    : no rerender        
        case3 change in age wont rerender
        */}
      </div>
    </>
  );
};

export default App;
