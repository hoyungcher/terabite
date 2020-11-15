import React from 'react';
import RecipeItem from './RecipeItem';

const RecipesList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No recipes found.</h2>
            </div>
        )
    }

    return (
    <ul className="recipes-list">
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
    </ul>
    )
}

export default RecipesList;