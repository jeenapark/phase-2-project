import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import TriviaCard from "./TriviaCard";

function TriviaContainer({ filterByCategory }) {
    const [ counter, setCounter ] = useState(0);

    const renderEachQuestion = filterByCategory.map((question) => {
        return <TriviaCard key={question.id} counter={counter} setCounter={setCounter} question={question}/>
    });

    function resetScore() {
        setCounter(0)
    }

    return (
        <Card.Group itemsPerRow={6}>
           <div className="tooltip" id="score" onClick={resetScore} >
           <h1>SCORE: {counter}</h1>
           <p id="counterText" className="tooltiptext">CLICK on the score counter to reset the score and play again!</p>
           </div>
            {renderEachQuestion}
        </Card.Group>
    )
}

export default TriviaContainer;