import React, { useState } from "react";
import "./Table.css"
import PlayWithO from "./PlayWithO";


function Choose(){
  const [isShown, setIsShown] = useState("");


  function createTable()
        {
       let  rn = window.prompt("Input number of rows", 1);
       let  cn = window.prompt("Input number of columns",1);
          
        for(var r=0;r<parseInt(rn,10);r++)
          {
          var x=document.getElementById('myTable').insertRow(r);
          for(var c=0;c<parseInt(cn,10);c++)  
            {
            var y=  x.insertCell(c);
            y.innerHTML="Row-"+r+" Column-"+c; 
            }
          }
        }
  return (
    <>
    <div>
    <input type="button" onClick = {() => createTable()} value="Create the table" /> 
      {/* <button onClick={(e)=>{
       e.target.style.display = "none";
        setIsShown("x");
       }}>X</button>
       {isShown === "x" && <PlayWithX/>} */}
      </div>
      </>
  )
}

    function PlayWithX() {

      const [turn, setTurn] = useState("x");
      const [cellValue, setCells] = useState(Array(9).fill(""));
      const [winner, setWinner] = useState();
    
      function Cell(props) {
        return <td onClick={() => clickBox(props.num)}>{cellValue[props.num]}</td>;
      }
    
      function clickBox(num) {
        if (turn === "x" && cellValue[num] === "" && winner !== "o") {
          cellValue[num] = "x";
          checkWinner();
          //console.log(winner === "x");
          setTurn("o");
          random();    
        }
    
      }
      function random (){
        if(winner !== "x"){
         let arrayOfEmptyValues  = cellValue.reduce((aggr,value,index) => {
            if(value.length === 0){
             aggr.push(index);
            }
            return aggr;
          },[]) 
           let randomBoxId = arrayOfEmptyValues[Math.floor(Math.random() * arrayOfEmptyValues.length)];
          arrayOfEmptyValues.splice(arrayOfEmptyValues.indexOf(+randomBoxId), 1);
           cellValue[randomBoxId] = "o";
           setCells([...cellValue]);
           setTurn("x");
           checkWinner();
        }
      }
    
    
      function checkWinner() {
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
            setWinner("x");
          } else if (
            cellValue[winingComb[0]] === "o" &&
            cellValue[winingComb[1]] === "o" &&
            cellValue[winingComb[2]] === "o"
          ) {
            setWinner("o");
          }
        });
      }
    
      function restartGame() {
        setWinner(null);
        setCells(Array(9).fill(""));
        setTurn("x");
      }
      return (
        <div>
          <table>
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
          )}
        </div>
      );
    }


export default Choose;
