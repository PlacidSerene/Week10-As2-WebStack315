import React, { useState } from "react";

export default function Color(props) {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.color(color);
    setColor("");
    // console.log(props.color);
    // I will go back here
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "200px", height: "30px", marginRight: "5px" }}
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button style={{ width: "50px", height: "35px" }} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
