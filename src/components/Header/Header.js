import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

	const activeStyle= {
		fontWeight:"blod",
		color:"red"
	}


	return (
		<div>
			<NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
			<NavLink to="/restaurant" activeStyle={activeStyle}>Restaurant</NavLink>

		</div>
	);
};

export default Header;