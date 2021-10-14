import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetail = () => {
	const [meal, setMeal] = useState();
	const params = useParams();
	const {mealId} = params;
	console.log(params)


	// const { strMeal, strMealThumb } = meal;

	useEffect(()=>{
		const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
		fetch(url)
		.then(res=>res.json())
		.then(data=>setMeal(data?.meals[0]))
	},[])

	


	return (
		<div>
			{/* <h5>This is meal detail</h5> */}
			<img src={meal?.strMealThumb} alt="" />
			<h1>{meal?.strMeal}</h1>
			<p>Category: {meal?.strCategory}</p>
			<p>Area: {meal?.strArea}</p>
			<hr />
			<p>Instruction:</p>
			<hr/>
			<p>{meal?.strInstructions}</p>

		</div>
	);
};

export default MealDetail;