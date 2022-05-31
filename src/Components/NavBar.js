import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import TriviaContainer from "./TriviaContainer";
import Categories from "./Categories";

function NavBar() {
    const [ questions, setQuestions ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/results")
        .then((resp) => resp.json())
        .then((data) => setQuestions(data));
    }, [])

    return (
        <Container>
            <Categories />
            <TriviaContainer questions={questions}/>
        </Container>
    )
}

export default NavBar;