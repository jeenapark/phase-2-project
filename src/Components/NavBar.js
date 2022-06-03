import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    const [ active, setActive ] = useState("");

    function handleClick(e) {
        setActive(e.target.value);
    }

    return (
        <header>
            <nav id="navBar">
                <NavLink exact className="button" to="/">
                    <button onClick={handleClick} className={active === "About The Game" ? "active" : ""} value="About The Game">About The Game</button>
                </NavLink>
                <NavLink exact className="button" to="/questions">
                    <button onClick={handleClick} className={active === "Play The Game" ? "active" : ""} value="Play The Game">Play The Game</button>
                </NavLink>
                <NavLink exact className="button" to="/questions/new">
                    <button onClick={handleClick} className={active === "Submit New Question" ? "active" : ""} value="Submit New Question">Submit New Question</button>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar;