import "./App.css";
import React, { useState } from "react";
import Color from "./Color";
import Box from "./Box";
function App() {
  const [currentBox, setCurrentBox] = useState([]);
  const gotBox = (newColor) => {
    setCurrentBox((oldArray) => [...oldArray, newColor]);
  };

  return (
    <>
      <h1>Let's add some colors</h1>
      <Color color={gotBox} />
      <Box boxs={currentBox} />
    </>
  );
}

export default App;
