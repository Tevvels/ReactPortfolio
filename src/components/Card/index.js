
import React from 'react';
import "./style.css"



function Card(props) {
    return (
        <>
            <a className={`card-anchor`} href={props.url}>
                <div className={`card`} >
                    <h3 className={`card-name`}>{props.name}</h3>
                    <img className={`card-img`} src={props.image} />
                    <p className={`card-desc`}>{props.desc}</p>
                </div>
            </a>
        </>
    )
}

export default Card
