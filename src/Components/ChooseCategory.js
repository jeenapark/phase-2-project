import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import Categories from "./Categories";
import TriviaContainer from "./TriviaContainer";

function ChooseCategory({ questions }) {

    const [ filterByCategory, setFilterByCategory ] = useState([]);

    function handleClick(e) {
        const filterQ = questions.filter((question) => question.category === e.target.value);
        setFilterByCategory(filterQ);
    }

    return (
        <div>
            <Categories handleClick={handleClick} />
            <TriviaContainer filterByCategory={filterByCategory}/>
        </div>
    )
}

export default ChooseCategory;