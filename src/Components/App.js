import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ChooseCategory from "./ChooseCategory";
import About from "./About";
import Form from "./Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  const [ questions, setQuestions ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/results")
        .then((resp) => resp.json())
        .then((data) => setQuestions(data));
    }, [])

  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/questions/new">
            <Form />
          </Route>
          <Route path="/questions">
            <ChooseCategory questions={questions}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
