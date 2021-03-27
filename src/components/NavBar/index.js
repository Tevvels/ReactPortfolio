import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="nav">
            <Link className="link" to="/">
                Christopher Watkins
            </Link>
            <div>
                <ul>
                    <li>
                        <Link to="/testing" className={ window.location.pathname === "/testing" ? "nav-linkactive" : "nav-link"}>
                            tesing 
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={ window.location.pathname === "/" ? "nav-linkactive" : "nav-link"}>
                            home 
                        </Link>
                    </li>
                
                    <li>
                        <Link to="/contact" className={ window.location.pathname === "/contact" ? "nav-linkactive" : "nav-link"}>
                            contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={ window.location.pathname === "/portfolio" ? "nav-linkactive" : "nav-link"}>
                            portfolio
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 


export default Navbar;