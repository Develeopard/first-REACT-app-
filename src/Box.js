import React from 'react';
import './App.css';

function Box({name, country, points}){
    return(
        <div className='box'>
            <h3>{name}</h3>
            <p>{country}</p>
            <h3>{points}</h3>
        </div>
    );
}

export default Box;