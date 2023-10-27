import React, { memo } from "react";

const Child2 = ({ name, handleEdit,handleDelete }) => {
  console.log("2 ", name);
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "20px" }}>
      {" "}
      <h3>child2 </h3>
      <button onClick={() => handleEdit("hello")}>edit</button>
      <button onClick={() => handleDelete()}>delete</button>
    </div>
  );
};

export default memo(Child2);
