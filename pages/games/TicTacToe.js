import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/layout.module.css";
import swal from "sweetalert";

const TicTacToe = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [numPlayers, setNumPlayers] = useState(2);
  const [winLimit, setWinLimit] = useState(boardSize);
  const [symbols, setSymbols] = useState([
    "X",
    "O",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);
  const [boardArray, setBoardArray] = useState(
    Array.from({ length: boardSize }, () => Array(boardSize).fill(""))
  );
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [changeNumberOfPlayer, setChangeNumberOfPlayer] = useState(true);

  // Create a JavaScript map to count to 10
  const numberMap = new Map(
    [...Array(9).keys()].map((num) => [num + 2, num + 2])
  );

  const init = () => {
    setBoardArray(
      Array.from({ length: boardSize }, () => Array(boardSize).fill(""))
    );
    setTurn(0);
    setGameOver(false);
    setChangeNumberOfPlayer(true);

  };

  const handleClick = (row, col) => {
    if (boardArray[row][col] === "" && !gameOver) {
      const symbol = symbols[turn];
      const updatedBoardArray = [...boardArray];
      updatedBoardArray[row][col] = symbol;
      setBoardArray(updatedBoardArray);

      checkGameOver(row, col, symbol);

      if (!gameOver) {
        setTurn((turn + 1) % numPlayers);
      }
    }
  };

  const checkGameOver = (row, col, symbol) => {
    if (checkLine(row, col, symbol)) {
      swal({
        title: "Good job!",
        text: "Player " + symbol + " Wins!",
        icon: "success",
        button: "Ok",
      });
      setGameOver(true);
    } else if (checkFull()) {
      swal({
        title: "It's a Draw!",
        text: "Nobody Wins",
        icon: "error",
        button: "Ok",
      });
      setGameOver(true);
    }
  };

  const checkLine = (row, col, symbol) => {
    // Initialize the counters for each direction
    var horizontal = 0;
    var vertical = 0;
    var diagonal = 0;
    var antiDiagonal = 0;

    // Loop through the board size
    for (var i = 0; i < boardSize; i++) {
      // Check the horizontal direction
      if (boardArray[row][i] == symbol) {
        horizontal++;
      }

      // Check the vertical direction
      if (boardArray[i][col] == symbol) {
        vertical++;
      }

      // Check the diagonal direction
      if (boardArray[i][i] == symbol) {
        diagonal++;
      }

      // Check the anti-diagonal direction
      if (boardArray[i][boardSize - i - 1] == symbol) {
        antiDiagonal++;
      }
    }
    // Return true if any of the counters is equal to the board size
    return (
      horizontal == winLimit ||
      vertical == winLimit ||
      diagonal == winLimit ||
      antiDiagonal == winLimit
    );
  };
  // Function to check if the board is full
  const checkFull = () => {
    // Loop through the board array
    for (var i = 0; i < boardSize; i++) {
      for (var j = 0; j < boardSize; j++) {
        // Return false if any cell is empty
        if (boardArray[i][j] == "") {
          setChangeNumberOfPlayer(false);
          return false;
        }
      }
    }

    // Return true if all cells are filled
    return true;
  };

  // Function to display the game status
  const displayStatus = () => {
    if (!gameOver) {
      return "Player " + symbols[turn] + "'s turn";
    } else {
      return "Game Over";
    }
  };

  // Function to create the board HTML elements
  const createBoard = () => {
    return (
      <div id="board" className={styles.board}>
        {boardArray.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row_cells}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={styles.cell}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const handelBoardSizeChange = (e) => {
    setBoardSize(parseInt(e.target.value));
  };

  const handleNumberOfPlayers = (e) => {
    if (!changeNumberOfPlayer && !gameOver) {
      swal({
        title: "Are you sure?",
        text: "Do you want to restart the game",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Number of players is now updated", {
            icon: "success",
          });
          setNumPlayers(parseInt(e.target.value));
          init(e)
        } else {
          setNumPlayers(parseInt(e.target.value));
          swal("The game will continue as it is");
        }
      });
    } else {
      setNumPlayers(parseInt(e.target.value));
    }
  };

  return (
    <Layout>
      <div className={styles.tikTakToe}>
        <h1 className="mb-4">Tic Tac Toe</h1>
        <div id="container" className="d-flex justify-content-between">
          {createBoard()}
          <div id="options" className={styles.options}>
            <div className="mt-1">
              <label>Input board size:</label>
              <input
                className="form-control"
                type="number"
                min={3}
                value={boardSize}
                onChange={handelBoardSizeChange}
              />
            </div>

            <div className="mt-2">
              <label className="mt-2">Select the number of players:</label>
              <select
                className="form-control"
                id="players"
                value={numPlayers}
                onChange={handleNumberOfPlayers}
              >
                {[...numberMap.entries()].map(([value, label]) => (
                  <option key={value} value={value}>
                    {label} players
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-2">
              <label className="mt-2">
                Select number of consecutive cells to win
              </label>
              <input
                className="form-control"
                type="number"
                max={boardSize}
                min={3}
                value={winLimit}
                onChange={(e) => setWinLimit(e.target.value)}
              />
            </div>
            <button className="btn btn-success mt-3" onClick={init}>
              Start Game
            </button>
          </div>
        </div>
        <div id="status" className="mt-3">
          {displayStatus()}
        </div>
      </div>
    </Layout>
  );
};

export default TicTacToe;
