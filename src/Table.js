import { useState } from "react";
import "./Table.css";

function Table() {

  const [turn, ChangeTurn] = useState("x");
  const [cellValue, SetCells] = useState(Array(9).fill(""));
  const [winner, SetWinner] = useState();

  return (
    <div>
      <table>
        Turn: {turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>

      {winner && (
        <>
        <div>{winner} is the winner</div>
        <div><button onClick={() => RestartGame()}>Play Again</button></div>
        </>
      )}
    </div>

  );


  function Cell({ num }) {
    return <td onClick={() => ClickBox({ num })}>{cellValue[num]}</td>;
  }


  function CheckWinner() {
    let allWiningCombs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    allWiningCombs.forEach((winingComb) => {
      if (
        cellValue[winingComb[0]] === "x" &&
        cellValue[winingComb[1]] === "x" &&
        cellValue[winingComb[2]] === "x"
      ) {
        SetWinner("x");
      } else if ( 
        cellValue[winingComb[0]] === "o" &&
        cellValue[winingComb[1]] === "o" &&
        cellValue[winingComb[2]] === "o"
        ) {
        SetWinner("o");
      }
    });
  }


  function ClickBox({ num }) {
    if (turn === "x" && cellValue[num] === "") {
      cellValue[num] = "x";
      ChangeTurn("o");
    } else if (turn === "o" && cellValue[num] === "") {
      cellValue[num] = "o";
      ChangeTurn("x");
    }
    CheckWinner();
  }

  
  function RestartGame(){
    SetWinner(null);
    SetCells(Array(9).fill(""))
  }
}

export default Table;
