import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function TriviaCard({ question }) {
    
    return (
        <Card>
            <>
            <div>
                {question.question}
            </div>
            <div>
                {question.category}
            </div>
            <div>
                {question.difficulty}
            </div>
            </>
        </Card>
    )
}

export default TriviaCard;