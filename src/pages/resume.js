import React from "react";
import Resumepdf from "../files/Resume.pdf";
import Container from "../components/Container";

function resume(){
    return(
        <div>
            <Container className={`container-resume`} main ={
            <section className="resume" >
                <article className="" >
                <a href={Resumepdf} className={`resume-download`} download="chris_watkins_resume">download now!</a>
                   
                    <iframe className="resume" src="https://docs.google.com/document/d/1AUR9W9OQkuhtGAKg-macOPRY3FaoInUVSrFFE0w9U0g/edit?usp=sharing"></iframe>
                
                </article>
            </section>

            } />
        </div>
    )
} 

export default resume;