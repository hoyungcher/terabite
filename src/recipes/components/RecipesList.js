import React from 'react';
import RecipeItem from './RecipeItem';

// import classes from './RecipesList.module.css';

const RecipesList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No recipes found.</h2>
            </div>
        )
    }

    return (
    <div className="recipes-list">
        <h2>My recipes</h2>
        {props.items.map(recipe => (
            <RecipeItem 
                key={recipe.id}
                id={recipe.id}
                imageURL={recipe.imageURL}
                name={recipe.name}
                portions={recipe.portions}
            />
        ))}
    </div>
    )
}

export default RecipesList;