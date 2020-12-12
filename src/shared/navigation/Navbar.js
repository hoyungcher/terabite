import React from 'react';
import { Link } from 'react-router-dom';
// import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <h1><Link to="/">TERABITE</Link></h1>
            <h3><Link to="/">Dasboard</Link></h3>
            <h3><Link to="/meals">Meals</Link></h3>
            <h3><Link to="/recipes">Recipes</Link></h3>
            <h3><Link to="/inventory">Inventory</Link></h3>
            <h3><Link to="/">Shopping List</Link></h3>
        </div>
    )
}

export default Navbar;