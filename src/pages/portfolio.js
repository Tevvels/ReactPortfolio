import React from "react";
import Card from "../components/Card"
import Container from "../components/Container"
import brawndo from '../images/brawndo.png'
import codequiz from '../images/code_quiz.jpg'
import daBurger from '../images/DaBurger.png'
import budget from '../images/budget-main.png'
import workout from '../images/workout-main.png'
import one from '../images/one.png'
import "../components/Container/projects.css"
import "./style.css"

function portfolio(){
    return(
        <div>
        
    
        <Container className={`container-projects`}
        
            main={<Card classes={`project-1`}
            name={'Brawndo'} 
            image={brawndo}
            url={"https://brawndoplant.herokuapp.com/garden"}
            github={`https://github.com/Tevvels/Brawndo`} 
            desc={" An app that helps plants grow" }  />}

            main2={<Card classes={`project-2`}
            name={'Code Quiz'}
            url={"https://tevvels.github.io/DU_bootcamp_homework_4_code_quiz/"}
            github={`https://github.com/Tevvels/DU_bootcamp_homework_4_code_quiz`} 
            image={codequiz} 
            desc={" Nice little quiz to test your Javascript" } />}  

            main3={<Card classes={`project-3`} 
            name={'Daburger'} 
            url={"https://arcane-headland-91349.herokuapp.com/"} 
            image={daBurger}
            github={`https://github.com/Tevvels/budgetTracker`} 
            desc={"Let us check to see who has eaten the burger"} /> }

            main4={<Card classes={`project-4`} 
            name={'Deep Vibrations'} 
            url={"https://tevvels.github.io/Project_One_Deep_Vibrations/"}  
            github={`https://github.com/Tevvels/Project_One_Deep_Vibrations`} 
            image={one} 
            desc={" A music app based on your mood"} /> } 

            main5={<Card classes={`project-5`} 
            name={'Budget Tracker'} 
            url={"https://dry-lowlands-45443.herokuapp.com/"} 
            github={`https://github.com/Tevvels/budgetTracker`} 
            image={budget} 
            desc={" A way to monitor our budget. on and offline"} /> } 

            main6={<Card classes={`project-6`}
            name={'Fitness Tracker'}
            image={workout} 
            url={"https://fast-waters-91543.herokuapp.com/?id=605cbe927cd474001501836a"  }
            github={`https://github.com/Tevvels/WorkitOut`} /> }


            />

        </div>
    )
} 

export default portfolio;