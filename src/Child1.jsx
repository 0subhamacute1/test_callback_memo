import React from "react";

const Child1 = (props) => {
  console.log("child1 render");
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "20px" }}>
      <h3>child1 </h3>
    </div>
  );
};

export default Child1;
