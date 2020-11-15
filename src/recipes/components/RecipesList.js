import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No recipes found.</h2>
            </div>
        )
    }



    return (
    <ul>
        {props.items.map(recipe => {
            <RecipeItem />
        })}
    </ul>
    )
}

export default RecipeList;