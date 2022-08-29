import React, { useState } from "react";
import "./Table.css"


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

      // function clickBox(num) {
      //   console.log(num)
      //         // if (turn === "o" && cellValue[num] === "" && winner !== "x") {
      //         //   cellValue[num] = "o";
      //         //   checkWinner();
      //         //   //console.log(winner === "x");
      //         //   setTurn("x");
      //         //   random();    
      //         // }
          
      //       }



    
      // function checkWinner() {
      //   let allWiningCombs = [
      //     [0, 1, 2],
      //     [3, 4, 5],
      //     [6, 7, 8],
      //     [0, 3, 6],
      //     [1, 4, 7],
      //     [2, 5, 8],
      //     [0, 4, 8],
      //     [6, 4, 2],
      //   ];
    
      //   allWiningCombs.forEach((winingComb) => {
      //     if (
      //       cellValue[winingComb[0]] === "x" &&
      //       cellValue[winingComb[1]] === "x" &&
      //       cellValue[winingComb[2]] === "x"
      //     ) {
      //       setWinner("x");
      //     } else if (
      //       cellValue[winingComb[0]] === "o" &&
      //       cellValue[winingComb[1]] === "o" &&
      //       cellValue[winingComb[2]] === "o"
      //     ) {
      //       setWinner("o");
      //     }
      //   });
      // }
    
      // function restartGame() {
      //   setWinner(null);
      //   setCells(Array(9).fill(""));
      //   setTurn("x");
      // }
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
        let val = +value;
        const [cells , setCells] = useState(Array(val).fill( Array(val).fill("") ));
        const [turn, setTurn] = useState("x");
        const [winner, setWinner] = useState();


       console.log(cells)

        function clickBox(num){
    
         if(turn === 'x' && num.target.innerHTML === '' && winner !== 'o'){
          num.target.innerHTML = 'X';
          setTurn("o");
        } else if(turn === 'o' && num.target.innerHTML === ''   && winner !== 'x'){
          num.target.innerHTML = 'O';
          setTurn("x");
        }
      
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
                                    return (
                                        <td id = {id++}  onClick ={(e) => clickBox(e) }></td>
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

