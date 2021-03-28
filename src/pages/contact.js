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

                           <input type="textArea"></input>
                           
                            <input type="submit"></input>
                       </form>

            } />
        </div>
    )
} 

export default Contact;