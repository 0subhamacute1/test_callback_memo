import React, { memo } from "react";

const Child2 = ({ memoName, memoAge, handleDelete }) => {
  console.log("c2 ", memoName, memoAge);
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "20px" }}>
      <h3>child2 </h3>
      <button onClick={() => handleDelete("del@1")}>delete</button>
    </div>
  );
};

export default memo(Child2);
