import React, {Component, useState} from "react";
import '../styles/App.css';
import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";

const App = () => {
  return (
    <div id="main">
      <FirstProject/>
      <SecondProject/>
      <ThirdProject/>
    </div>
  )
}


export default App;
