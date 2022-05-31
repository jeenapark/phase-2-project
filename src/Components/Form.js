import React, { useState } from "react";

function Form () {

    return (
        <form>
            <h3>Add New Trivia Question</h3>
            <input type="text" placeholder="New trivia question..."/>
                <select name="categories" id="dropDown">
                    <option value="" disabled selected>Select a category</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="History">History</option>
                    <option value="Sports">Sports</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Politics">Politics</option>
                    <option value="Animals">Animals</option>
                    <option value="Science">Science</option>
                    <option value="Vehicles">Vehicles</option>
                </select>
            <input type="radio" name="truefalse"/>
                <label>True</label>
            <input type="radio" name="truefalse"/>
                <label>False</label>
            <input type="submit" />
        </form>
    )
}

export default Form;