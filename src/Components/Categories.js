import React, { useState } from "react";

function Categories({ handleClick }) {
    
    return (
        <>
            <button onClick={handleClick} value="Entertainment">Entertainment</button>
            <button onClick={handleClick} value="History">History</button>
            <button onClick={handleClick} value="Sports">Sports</button>
            <button onClick={handleClick} value="General Knowledge">General Knowledge</button>
            <button onClick={handleClick} value="Politics">Politics</button>
            <button onClick={handleClick} value="Animals">Animals</button>
            <button onClick={handleClick} value="Science">Science</button>
            <button onClick={handleClick} value="Vehicles">Vehicles</button>
        </>
    )
}

export default Categories;