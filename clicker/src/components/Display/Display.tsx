import React from 'react';
import { DisplayProps } from "../../helpers/interfaces";


const Display: React.FC  <DisplayProps> = ({ count }) => {
	const generateRandomNumber = () => {
	  return Math.random();
	};
  
	
	return (
	  <>
		<p>Random number: {generateRandomNumber()}</p>
		<p>{count}</p>
	  </>
	);
  };
  
  export default Display;
