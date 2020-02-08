import React, {useState} from 'react';
import './App.css';
import Board from './components/grid';
import RandomGrid from './components/randomGrid';
import UserGuess from './components/UserGuess';
import BoggleSolver from "./components/boggle_solver";
import BoggleBoard from "./components/BoggleBoard";
import Button from '@material-ui/core/Button';


let board = RandomGrid();
let foundWords =  BoggleSolver(board, require('./components/dictionary.json').words);
console.log(foundWords);

function App() {
  const [buttonLabel, setButtonLabel] = useState("Start game");
  const [show, setShow] = useState(false);
  const [foundWords, setFoundWords] = useState([]);
  function addFoundWord(word) {
    let newFoundWords = foundWords;
    newFoundWords.push(word);
    setFoundWords(newFoundWords);
  }
  function toggleBoard(){
    if (show == false){
      setButtonLabel('End Game');
    }
    else{
      setButtonLabel('Start Game')
    }
    setShow(!show)
  }
  
  function startGame(bool){
    if (bool === true){
      return <BoggleBoard/>
    }
    else if (bool === false){
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo"src={require("./components/boggle.png")} />
          {startGame(show)}
          <br>
          </br>
            <Button variant = "contained" onClick={()=> toggleBoard()}>{buttonLabel}</Button>
              <br>
              </br>
    
              <a>
          
        <UserGuess allSolutions = {foundWords} correctAnswerCallback={(word) => addFoundWord(word)}/>
        </a>
      </header>
    </div>
  );
};

export default App;
