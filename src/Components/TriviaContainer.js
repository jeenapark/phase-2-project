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
        <>
            <div className="tooltip" onClick={resetScore}>SCORE: {counter}
                <span id="counterText" className="tooltiptext">CLICK on the score counter to reset the score and play again!</span>
            </div>
            {renderEachQuestion}
        </>
    )
}

export default TriviaContainer;