import React from 'react';
// import classes from './Meals.module.css'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let today = new Date();
let week = [];
for (let i = 0; i < 7; i++) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + i);
    week[i] = newDate.getDate() + ' ' + (monthNames[newDate.getMonth()]);
} 



// let date = today.getDate() + ' ' + (monthNames[today.getMonth()]);

const Meals = () => {
    return (
        <React.Fragment>
            <h2>Your meals for this week</h2>
            <h3>{week[0]}</h3>
            <h3>{week[1]}</h3>
        </React.Fragment>
        
    )
}

export default Meals;