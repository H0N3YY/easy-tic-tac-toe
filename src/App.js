import {useState} from "react";
import './App.css';
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurnPlay, setXTurnPlay] = useState(true);
  
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (squareID)=>{
    const updatedBoard = board.map((value, id) => {
      if (id === squareID){
        return xTurnPlay === true ? "X" : "O";
      }
      else{
        return(value );
      }
    });
    setBoard(updatedBoard);
    setXTurnPlay(!xTurnPlay);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1> Tic-Tac-Toe</h1>
       <Board board={board} onClick={handleBoxClick}/>
      </header>
    </div>
  );
}

export default App;
