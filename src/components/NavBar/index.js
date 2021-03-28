import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Navbar () {
    return (
        <nav className="nav">
            <Link 
            className={`nav-name`}
             to="/">
                Christopher Watkins
            </Link>
            <div className={`list-div`}>
                <ul className={`list`}>

                    <li className={`listitem`}>
                        <Link to="/" className={  window.location.pathname === "/" ? "nav-linkactive" : "nav-link",`listitem`}>
                            home 
                        </Link>
                    </li>
                
                    <li className={`listitem`}>
                        <Link to="/contact" className={ window.location.pathname === "/contact" ? "nav-linkactive" : "nav-link",`listitem`}>
                            contact
                        </Link>
                    </li>
                    <li className={`listitem`}>
                        <Link to="/portfolio" className={ window.location.pathname === "/portfolio" ? "nav-linkactive" : "nav-link",`listitem`}>
                            portfolio
                        </Link>
                    </li>
                    <li className={`listitem`}>
                        <Link to="/resume" className={ window.location.pathname === "/resume" ? "nav-linkactive" : "nav-link",`listitem`}>
                            resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 


export default Navbar;