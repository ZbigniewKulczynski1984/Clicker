import React from 'react';
import { DisplayProps } from "../../helpers/interfaces";


const Display: React.FC  <DisplayProps> = ({
	propsToPassDown}) => {

	const generateRandomNumber = () => {
	  return Math.random();
	};
  
	console.log(propsToPassDown)
	return (
	  <>
		<p>{generateRandomNumber()}</p>
		<p>0</p>
	  </>
	);
  };
  
  export default Display;
