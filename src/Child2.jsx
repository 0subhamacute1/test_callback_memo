import React, { memo } from 'react'

const Child2 = (props) => {
    console.log("child2 render")
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "20px" }}>  <h3>child2 </h3></div>
  )
}

export default memo(Child2)