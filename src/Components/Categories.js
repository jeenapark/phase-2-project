import React from "react";

function Categories({ handleClick, questions, active }) {

    const newCategoryArr = questions.map((question) => {
        return question.category;
    })

    let categorySet = new Set(newCategoryArr);
    let uniqueCategories = Array.from(categorySet);

    const renderCategoryButton = uniqueCategories.map((category) => {
        return <button key={category} className={active === category ? "active" : ""} onClick={handleClick} value={category}>{category}</button>
    });
    
    return (
        <div className="category">
            {renderCategoryButton}
        </div>
    )
}

export default Categories;