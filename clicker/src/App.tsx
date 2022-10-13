import React from "react";
import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";
function App() {
  // props === properties
  // propsy działają tylko w dół
  const propToPassDown = 5;
  
  return (
    <div className="App">
      <Display propsToPassDown= {propToPassDown} />
      
      <Manipulator />
    </div>
  );
}

export default App;


