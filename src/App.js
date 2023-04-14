import {useState} from "react";
import './App.css';
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleBoxClick = (squareID)=>{
    const updatedBoard = board.map((value, id) => {
      if (id === squareID){
      return ("X");
      }
      else{
        return( value );
      }
    });
    setBoard(updatedBoard);
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
