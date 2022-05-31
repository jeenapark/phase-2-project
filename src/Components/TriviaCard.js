import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function TriviaCard({ question }) {

    function handleAnswer(e) {
        e.preventDefault();
        console.log("hi");
        //increase counter by 1 if answer is correct, decrease if incorrect
    }
    
    return (
        <Card>
            <div className="content">
                <div className="header">{question.question}</div>
                <form onSubmit={handleAnswer}>
                    <input type="radio" name="truefalse" value="True"/>
                        <label>True</label>
                    <input type="radio" name="truefalse" value="False"/>
                        <label>False</label>
                    <input type="submit" />
                </form>
            </div>
        </Card>
    )
}

export default TriviaCard;