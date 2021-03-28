import React from "react";
import Resumepdf from "../files/Resume.pdf"

function resume(){
    return(
        <div>
            <section class="row margins_container gx-5" >
                <article class="col-lg-12 col-md-4 col-sm-12 the_box" >
                    <a href={Resumepdf} download="chris_watkins_resume">download now!</a>
                    <iframe class="resume" src="https://docs.google.com/document/d/e/2PACX-1vQQLvCRphv7N6mfkrk_fPTcJqsEV19uyxTlmLCMDMTSTgl_XU4dephnDzAvykuk8uBC7GSDKNvmjGR7/pub?embedded=true"></iframe>
                </article>
            </section>
        </div>
    )
} 

export default resume;