import React from "react";
import { Card } from "semantic-ui-react";

function TriviaCard({ question, counter, setCounter }) {

    let questAnswer = "";

    function handleChange(e) {
        questAnswer = e.target.value;
    }

    function handleAnswer(e) {
        e.preventDefault();
        questAnswer === question.correct_answer ? setCounter(counter => counter + 1) : setCounter(counter => counter - 1);
    }

    return (
        <Card id="cards">
            <div className="content">
                <div className="header">{question.question}</div>
                <form onSubmit={handleAnswer}>
                    <input onInput={handleChange} type="radio" name="truefalse" value="True"/>
                        <label>True</label>
                    <input onInput={handleChange} type="radio" name="truefalse" value="False"/>
                        <label>False</label>
                        <br></br>
                    <input id="submitTriviaAnswer" type="submit" />
                </form>
            </div>
        </Card>
    )
}

export default TriviaCard;