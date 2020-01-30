import React, { useState } from 'react';

function UserGuess({promptText}){
    const [text, setText] = useState("no text set");
    function getUserInput() {
        const promptResponse = prompt(promptText);
        console.log(promptResponse);
        setText(promptResponse);
        }
    return (
        <div>
         <button onClick={() => getUserInput()}>
           {promptText}
        </button>
        {text}
        </div>
    );
}
export default UserGuess;