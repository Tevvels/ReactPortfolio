import React, {useState} from "react";
import Container from "../components/Container"

function Contact(){

    const [inputs,setinput] = useState({
        name: "",
        email: "",
        textarea:""
    });


    return(
        <div>
            <Container /> 
                       <form>
                           <input type="text"></input>
                           <input type="text"></input>
                           <input type="text"></input>
                       </form>
        </div>
    )
} 

export default Contact;