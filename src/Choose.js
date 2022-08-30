import React, { useState } from "react";
import "./Table.css";

// function Choose(){
//   const [isShown, setIsShown] = useState("");

//   return (
//     <>
//     <div>
//        <button onClick={(e)=>{
//        e.target.style.display = "none";
//         setIsShown("x");
//        }}>X</button>
//        {isShown === "x" && <PlayWithX/>}
//       </div>
//       </>
//   )
// }

function PlayWithX() {
  return (
    <div>
      <MainPage />

      {/* {winner && (
            <>
              <div>{winner} is the winner</div>
              <div>
                <button onClick={() => restartGame()}>Play Again</button>
              </div>
            </>
          )}
          {winner === null && !cellValue.includes("") && (
            <>
              <div> Draw</div>
              <div>
                <button onClick={() => restartGame()}>Play Again</button>
              </div>
            </>
          )} */}
    </div>
  );

  function MainPage() {
    const [value, setValue] = useState();
    const [value2, setValue2] = useState(false);

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setValue2(true);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button>Create Table</button>
        </form>
        {value2 && <CreateTable value={value} />}
      </div>
    );
  }

  function CreateTable({ value }) {
    let val = +value;
    // const [cells , setCells] = useState(Array(val).fill( Array(val).fill("") ));
    const [cells, setCells] = useState(Array(val ** 2).fill(""));
    const [turn, setTurn] = useState("x");
    const [winner, setWinner] = useState();

    let winingCombs = [];
    let arr = Array.from(Array(val ** 2).keys());

    for (let i = 1; i <= val; i++) {
      for (let j = i - 1; j < i; j++) {
        winingCombs.push(arr.slice(val * j, val * i));
      }
    }
    let arr2 = [];
    for (let i = 0; i < arr.length; i = i + val) {
      arr2.push(i);
    }
    for (let i = 1; i < val; i++) {
      winingCombs.push(arr2.map((num) => num + i));
    }
    let arr3 = [];
    for (let i = 0; i < arr.length; i = i + val + 1) {
      arr3.push(i);
    }
    let arr4 = [];
    for (let i = val - 1; i < arr.length - 1; i = i + val - 1) {
      arr4.push(i);
    }
    winingCombs.push(arr2);
    winingCombs.push(arr3);
    winingCombs.push(arr4);
    console.log(winingCombs);

    winingCombs.forEach((winingComb) => {
      let winner = 0;
      for (let i = 0; i < winingComb.length - 1; i++) {
        if (cells[winingComb[i]]) {
          if (cells[winingComb[i]] === cells[winingComb[i + 1]]) {
            winner++;
          }
        }
        if(winner === winingComb.length - 1){
          alert(`player ${cells[winingComb[i]]} is the winner`);
        }
      }
      // console.log(winingComb)
    });

    function clickBox(num) {
      console.log(cells);
      if (turn === "x" && num.target.innerHTML === "" && winner !== "o") {
        num.target.innerHTML = "X";
        cells[num.target.id] = "x";
        setTurn("o");
      } else if (
        turn === "o" &&
        num.target.innerHTML === "" &&
        winner !== "x"
      ) {
        num.target.innerHTML = "O";
        cells[num.target.id] = "o";
        setTurn("x");
      }
      console.log(cells);
    }

    let id = 0;
    let arrOfValues = Array(val).fill("");

    return (
      <table>
        <tbody>
          {arrOfValues.map(() => {
            return (
              <tr>
                {arrOfValues.map(() => {
                  return <td id={id++} onClick={(e) => clickBox(e)}></td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default PlayWithX;
