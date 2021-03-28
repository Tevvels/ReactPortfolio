import React from "react";
import Card from "../components/Card"
import Container from "../components/Container"
import brawndo from '../images/brawndo.png'
import codequiz from '../images/code_quiz.jpg'
import daBurger from '../images/DaBurger.png'
import one from '../images/one.png'
import day_planner from '../images/day_planner_01.PNG'
import "../components/Container/projects.css"

function portfolio(){
    return(
        <div>
        
    
        <Container className={`container-projects`}
        
            main={<Card name={'Brawndo'} image={brawndo}
            url={"https://brawndoplant.herokuapp.com/garden"} desc={" An app that helps plants grow" } />}

            main2={<Card name={'Code Quiz'} url={"httpshttps://brawndoplant.herokuapp.com/garden"} image={codequiz} desc={" An app that helps plants grow" } />}  
           
            main3={<Card name={'Daburger'} url={"https://arcane-headland-91349.herokuapp.com/"} image={daBurger} desc={" An app that helps plants grow"} /> } 
            main4={<Card name={'Deep Vibrations'} url={"https://arcane-headland-91349.herokuapp.com/"} image={one} desc={" An app that helps plants grow"} /> } 
            main6={<Card name={'Brawndo'} url={"https://brawndoplant.herokuapp.com/garden"} image={brawndo} desc={" An app that helps plants grow"} /> } 
            
        />

        </div>
    )
} 

export default portfolio;