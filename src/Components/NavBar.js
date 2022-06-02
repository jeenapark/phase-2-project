import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

    return (
        <header>
            <nav id="navBar">
                <NavLink exact className="button" to="/">
                    <li className="active">About The Game</li>
                </NavLink>
                <NavLink exact className="button" to="/questions">
                   <li>Play The Game</li>
                </NavLink>
                <NavLink exact className="button" to="/questions/new">
                <li>Submit New Question</li>
                </NavLink>
                
            </nav>
        </header>
    )
}

export default NavBar;