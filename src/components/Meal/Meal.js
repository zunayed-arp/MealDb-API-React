import React from 'react';
import { useHistory } from 'react-router';
import './Meal.css';

const Meal = ({meal}) => {
	const { idMeal, strMeal, strMealThumb, strInstructions} = meal

	const history = useHistory();


	const handleFoodDetails = () =>{
history.push(`/meal/${idMeal}`)
	}
	return (
		<div className="meal">
			<img src={strMealThumb} alt="" />
			
			<h1>{strMeal}</h1>
			{/* <hr /> */}
			{/* <h3>Recipie Instrution</h3> */}
			{/* <hr /> */}
			{/* <p>{strInstructions}</p> */}

			<button onClick={handleFoodDetails}>Food Details</button>
		</div>
	);
};

export default Meal;