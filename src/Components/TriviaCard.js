import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function TriviaCard({ question }) {
    
    return (
        <Card>
            <div className="content">
                <div className="header">{question.question}</div>
            </div>
            <div className="extra content">
                <span>{question.category}</span>
            </div>
        </Card>
    )
}

export default TriviaCard;