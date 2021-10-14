import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {

	const [searchText, setSearchText] =useState('');
	const [meals, setMeals] = useState([]);
	console.log(meals)


	useEffect(()=>{
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
		fetch(url)
		.then(res=>res.json())
		.then(data=>setMeals(data?.meals))
	},[searchText])

const handleSearchField = (event) =>{
	const searchTextValue = event.target.value;
	setSearchText(searchTextValue);
	console.log(searchTextValue);
}

	return (
		<div>
			<input onChange={handleSearchField} type="text" name="" id="" placeholder="Search meals here" />


			<div className="meals-container">
				{
					meals.map(meal=><Meal
					key={meal?.idMeal}
					meal={meal}
					></Meal>)
				}
			</div>
		</div>
	);
};

export default Restaurant;