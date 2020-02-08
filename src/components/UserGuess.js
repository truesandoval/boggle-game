import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import './UserGuess.css';

function UserGuess({allSolutions, correctAnswerCallback}) {

  const [labelText, setLabelText] = useState("Make your first guess!");
  const [input, setInput] = useState("");

//   let foundSolutions = ....

  function evaluateInput() {
    // if (foundSolutions.includes(input)) {
    //  setLabelText(input + " has already been found!");
    // } else
     if (allSolutions.includes(input)) {
      correctAnswerCallback(input);
      setLabelText(input + " is correct!");
    } else {
      setLabelText(input + " is incorrect!");
    }
  }

  function keyPress(e) {
    if (e.key === 'Enter') {
      evaluateInput()
    }
  }

  return (
    <div className="Guess-input">
      <div>
        {labelText}
      </div>
      <TextField onKeyPress={(e) => keyPress(e)} onChange={(event) => {event.preventDefault(); setInput(event.target.value)}} />
    </div>
  );
}

export default UserGuess;