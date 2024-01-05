import React, { memo } from "react";

const Child1 = ({ abc }) => {
  console.log("c1 ", abc);
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "20px" }}>
      <h3>child1 </h3>
    </div>
  );
};

export default memo(Child1);
