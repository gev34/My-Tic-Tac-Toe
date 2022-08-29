import React, { useState } from "react";
import "./Table.css"
// import PlayWithO from "./PlayWithO";
// import { MainPage } from "./MainPage";


function Choose(){
  const [isShown, setIsShown] = useState("");

  return (
    <>
    <div>
       <button onClick={(e)=>{
       e.target.style.display = "none";
        setIsShown("x");
       }}>X</button>
       {isShown === "x" && <PlayWithX/>}
      </div>
      </>
  )
}

    function PlayWithX() {

      const [turn, setTurn] = useState("x");
      const [cellValue, setCells] = useState(Array(9).fill(""));
      const [winner, setWinner] = useState();


   
      function clickBox({num}) {
        console.log(num)
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
        <MainPage />
    
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

      function MainPage(){
        const [value , setValue] = useState();
        const [value2 , setValue2] = useState(false);
      
      
        return (
          <div>
          <form onSubmit={(e) =>{
            e.preventDefault();
            setValue2(true)
          }}>
            <input type = "text"  onChange={(e)=> {
             setValue(e.target.value);
            }} />
            <button>Create Table</button>
            </form>
            {(value2 && <CreateTable value = {value}/>)} 
            </div>
              )
            
      }
      
      function CreateTable({value}){
        let arrOfValues = Array(+(value)).fill("");
        let num = 0;
        const myFunc = (e) => {
          // console.log(e.target.innerHTML)
          if(e.target.innerHTML === ''){
            e.target.innerHTML = 'X'
          }  
        }
  
        return (
                <table>
                  <tbody>
                    {arrOfValues.map(() => {
        
                        return (
                            <tr>
                                {arrOfValues.map((val, index) => {
                                    return (
                                        <td id ={index} onClick ={(e) => myFunc(e) }>
                                          
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            )
      }
     


      
    }


export default Choose;
