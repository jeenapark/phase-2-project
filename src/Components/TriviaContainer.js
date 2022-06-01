import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import TriviaCard from "./TriviaCard";

function TriviaContainer({ filterByCategory }) {
    const [ counter, setCounter ] = useState(0);

    const renderEachQuestion = filterByCategory.map((question) => {
        return <TriviaCard key={question.id} counter={counter} setCounter={setCounter} question={question}/>
    });

    return (
        <Card.Group itemsPerRow={6}>
           <h1>Score: {counter}</h1>
            {renderEachQuestion}
        </Card.Group>
    )
}

export default TriviaContainer;