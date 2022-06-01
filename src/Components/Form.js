import React, { useState } from "react";

function Form ({ handleAddQuestion }) {
    const [ formData, setFormData ] = useState({
            category: "",
            type: "boolean",
            difficulty: "easy",
            question: "",
            correct_answer: "",
            incorrect_answers: [
                ""
            ],
    });

    function handleChange(e) {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
   
    function submitForm(e) {
        e.preventDefault();

        const newQuestionObj = {
            category: formData.category,
            type: "boolean",
            difficulty: "easy",
            question: formData.question,
            correct_answer: formData.correct_answer,
            incorrect_answers: [
                !formData.correct_answer
            ]
        };

        fetch("http://localhost:3000/results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuestionObj)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            console.log("jeena");
            handleAddQuestion(data);
            setFormData({
                category: "",
                type: "boolean",
                difficulty: "easy",
                question: "",
                correct_answer: "",
                incorrect_answers: [
                    ""
                ]
            })
        });
    }

    return (
        <form onSubmit={submitForm}>
            <h3>Add New Trivia Question</h3>
            <input onChange={handleChange} name="question" type="text" placeholder="New trivia question..."/>
                <select onChange={handleChange} name="category" id="dropDown">
                    <option value="">Select a category</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="History">History</option>
                    <option value="Sports">Sports</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Politics">Politics</option>
                    <option value="Animals">Animals</option>
                    <option value="Science">Science</option>
                    <option value="Vehicles">Vehicles</option>
                </select>
            <input type="radio" name="correct_answer" value={true}/>
                <label>True</label>
            <input type="radio" name="correct_answer"value={false}/>
                <label>False</label>
            <input type="submit" />
        </form>
    )
}

export default Form;