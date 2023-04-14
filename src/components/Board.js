
import "./Board.css";
import Square from "./Square";

const Board = ({ board, onClick, id }) => {
  return (
    <div className="board">
      {board.map((item, id) => (
        <Square
          value={item}
          onClick={() => onClick(id)}
        />
      ))}
    </div>
  );
};

export default Board;
