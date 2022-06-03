import React, { useState } from "react";
import Categories from "./Categories";
import TriviaContainer from "./TriviaContainer";

function ChooseCategory({ questions }) {
    const [ active, setActive ] = useState("");

    const [ filterByCategory, setFilterByCategory ] = useState([]);

    function handleClick(e) {
        const filterQ = questions.filter((question) => question.category === e.target.value);
        setFilterByCategory(filterQ);
        setActive(e.target.value);
    }

    return (
        <div>
            <Categories handleClick={handleClick} questions={questions} active={active}/>
            <TriviaContainer filterByCategory={filterByCategory}/>
        </div>
    )
}

export default ChooseCategory;