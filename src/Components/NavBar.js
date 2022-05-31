import React, { useState, useEffect } from "react";
import About from "./About";
import Form from "./Form";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";


function NavBar() {

    return (
        <header>
            <nav>
                <NavLink to="/">
                    <h2>About The Game</h2>
                </NavLink>
                <NavLink to="/questions/new">
                    <h2>Submit a new question</h2>
                </NavLink>
                <NavLink to="/questions">
                    <h2>Play</h2>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar;