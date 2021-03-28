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
                   
                    <iframe className="resume" src="https://docs.google.com/document/d/e/2PACX-1vQQLvCRphv7N6mfkrk_fPTcJqsEV19uyxTlmLCMDMTSTgl_XU4dephnDzAvykuk8uBC7GSDKNvmjGR7/pub?embedded=true"></iframe>
                
                </article>
            </section>

            } />
        </div>
    )
} 

export default resume;