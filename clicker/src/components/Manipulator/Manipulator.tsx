import React from 'react'
import {Manipulator} from "../../helpers/interfaces"

const Manipulator: React.FC<ManipalatorProps> = ({setCount}) => {
  
  const addOne = () => {
    setCount((prevState) => +1 );
  }
  
  return (
    <>
    <button >-</button>
    <button onClick={addOne}>+</button>
    </>
  );
};

export default Manipulator;