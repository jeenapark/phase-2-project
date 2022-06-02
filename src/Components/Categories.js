import React from "react";

function Categories({ handleClick }) {
    
    return (
        <div className="category">
            <button className="category"  onClick={handleClick} value="Entertainment">Entertainment</button>
            <button className="category" onClick={handleClick} value="History">History</button>
            <button className="category" onClick={handleClick} value="Sports">Sports</button>
            <button className="category" onClick={handleClick} value="General Knowledge">General Knowledge</button>
            <button className="category" onClick={handleClick} value="Politics">Politics</button>
            <button className="category" onClick={handleClick} value="Animals">Animals</button>
            <button className="category" onClick={handleClick} value="Science">Science</button>
            <button className="category" onClick={handleClick} value="Vehicles">Vehicles</button>
        </div>
    )
}

export default Categories;