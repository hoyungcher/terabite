import React from 'react';
import classes from './RecipeItem.module.css';

const RecipeItem = props => {
    return (
    <div className={classes.RecipeCard}>
        <img className={classes.RecipeImage} src={props.imageURL} alt = {props.name}/>
        <h2>{props.name}</h2>
        <h4>Serves {props.portions}</h4>
    </div>
    )
}

export default RecipeItem;