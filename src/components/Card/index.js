
import React from 'react';
import "./style.css"
import '../../pages/style.css'



function Card(props) {
    return (
        <>
                <div className={`card ${props.classes}`} >
                    <h3 className={`card-name`}>{props.name}</h3>
                    <img className={`card-img`} src={props.image} />
                    <p className={`card-desc`}>{props.desc}</p>
            <a className={`card-anchor }`} href={props.url}>Live Site</a>
            <br/>
            <a className={`card-anchor }`} href={props.github}>Github Repo</a>
            </div>
        </>
    )
}

export default Card
