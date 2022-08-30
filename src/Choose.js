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
        // const [cells , setCells] = useState(Array(val).fill( Array(val).fill("") ));
        const [cells , setCells] = useState(Array(val**2).fill(""));
        const [turn, setTurn] = useState("x");
        const [winner, setWinner] = useState();



       // console.log(cells)

        let winingCombs = [];
        let arr = Array.from(Array(val**2).keys());
       // console.log(arr)
        /* console.log(arr.slice(0,val))
        console.log(arr.slice(val,val*2))
        console.log(arr.slice(val*2,val*3))
        console.log(arr.slice(val*3,val*val)) */
        for(let i = 1 ; i <= val ; i++){
          for(let j = i-1 ; j < i ; j ++){
            winingCombs.push(arr.slice(val*j,val*i))
          }
        }
        let arr2 = [];
        for(let i = 0 ; i < arr.length ; i = i + val){
              arr2.push(i);
        }
        for(let i = 1 ; i < val ; i++){
            winingCombs.push(arr2.map((num) =>  num + i));
        }
         let arr3 = [];
        for(let i = 0 ; i < arr.length ; i = i + val + 1){
              arr3.push(i)
        }
        let arr4 = [];
        for(let i = val - 1 ; i < arr.length - 1 ; i = i + val - 1){
              arr4.push(i)
        }
        winingCombs.push(arr2)
        winingCombs.push(arr3)
        winingCombs.push(arr4)
        console.log(winingCombs)

  

        function clickBox(num){
         if(turn === 'x' && num.target.innerHTML === '' && winner !== 'o'){
          num.target.innerHTML = 'X';
          setTurn("o");
        } else if(turn === 'o' && num.target.innerHTML === '' && winner !== 'x'){
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

