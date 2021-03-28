import React from "react";
import Card from "../components/Card"
import brawndo from '../images/brawndo.png'

function portfolio(){
    return(
        <div>
        the portfolio?
        <Card name={'Brawndo'} url={brawndo} desc={" An app that helps plants grow"} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    )
} 

export default portfolio;