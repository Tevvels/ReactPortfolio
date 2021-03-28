
import React from 'react';
import "./style.css"



function Card(props) {
    return (
        <>
        < div className={`card`} >
        <h3>{props.name}</h3>
        <img src={props.url} />
        <p>{props.desc}</p>
        </div>
        </>
    )
}

export default Card
