import { useEffect, useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleRestart(){
    setSquares(Array(9).fill(''));
    setIsXTurn(true);
  }

  function handleClick(getIndex) {
    const cpySqr = [...squares];
    if (getWinner(cpySqr) || cpySqr[getIndex]) return;
    cpySqr[getIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySqr);
  }
  function getWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ){
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`Draw !! please restart the game`);
    }else if(getWinner(squares)){
        setStatus(`Winner is ${getWinner(squares)}, Please restart the game!!`);
    }else{
        setStatus(`Next turn is ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h2>{status}</h2>
        {
            (getWinner(squares) || squares.every((item) => item !== "") ) ? <button className="restart-button" onClick={handleRestart}>Restart</button> : null
        }
    </div>
  );
}
