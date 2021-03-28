import React from "react";
import "./style.css"
function Container(props) {
    return <div className={`${props.className} container`}>
     {props.main}
     {props.main2}
     {props.main3}
     {props.main4}
     {props.main5}
     {props.main6}
    </div>
}

export default Container;