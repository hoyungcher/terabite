import React from 'react';

const RecipeItem = props => {
    return (
    <div className="recipe">
        <img src={props.imageURL} />
        <h2>{props.name}</h2>
        <h4>Serves {props.portions}</h4>
    </div>
    )
}

export default RecipeItem