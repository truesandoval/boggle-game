import React from 'react';
import Dictionary from './components/HideBoard';
import './App.css';
import Board from './components/grid';
import UserGuess from './components/UserGuess';
import TextField from './components/TextField';
import RandomGrid from './components/randomGrid';
import NestedGrid from './components/grid';
import HideBoard from "./components/HideBoard";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
// import BuildDict from './components/BuildDict';

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Hide Board
      </button>
    );
  }
}

let board = RandomGrid();

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="App-logo"src={require("./components/boggle.png")} />
     
     {/* <HideBoard>

     </HideBoard> */}

        {NestedGrid(board)}
<br>
</br>
        <LoggingButton></LoggingButton>
        <TextField>

        </TextField>
    
        <a>
        <UserGuess promptText="Check Valid Word"/>
        </a>
      </header>
    </div>
  );
}

export default App;
