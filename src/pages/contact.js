import React, {useState,useEffect} from "react";
import Container from "../components/Container"

const Contact =({ values, onsubmite}) =>{

    const [inputs,setinput] = useState({
        name: "",
        email: "",
        textarea:""
    });


    return(
        <div>
            <Container main={
                       <form>
                           <p>Your name</p>
                           <input type="text"></input>
                           <p>Your email</p>

                           <input type="email"></input>
                           <p>Short description</p>

                           <textarea className={`textarea`} type="textArea" rows="4" cols="50"></textarea>
                           <br/>
                    
                            <input type="submit"></input>
                            <a href="mailto:chrisbwatkins@gmail.com">Or email me here</a>
                       </form>
                        
            } />
        </div>
    )
} 

export default Contact;