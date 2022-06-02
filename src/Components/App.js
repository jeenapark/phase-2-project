import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ChooseCategory from "./ChooseCategory";
import About from "./About";
import Form from "./Form";
import { Route, Switch } from "react-router-dom";

function App() {

  const [ questions, setQuestions ] = useState([]);
  const [ counter, setCounter ] = useState(0); 

    useEffect(() => {
        fetch("http://localhost:3000/results")
        .then((resp) => resp.json())
        .then((data) => setQuestions(data));
    }, [])

  function handleAddQuestion(newQuestion) {
    console.log("handlequestion", newQuestion);
    setQuestions([newQuestion, ...questions]);
  }

  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/questions/new">
            <Form handleAddQuestion={handleAddQuestion} />
          </Route>
          <Route path="/questions">
            <ChooseCategory questions={questions}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
