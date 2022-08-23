// import { useState } from "react";
// import "./Table.css";

// function PlayWithO() {

//     const [turn, setTurn] = useState("x");
//     const [cellValue, setCells] = useState(Array(9).fill(""));
//     const [winner, setWinner] = useState();
  
//     function Cell(props) {
//       return <td onClick={() => clickBox(props.num)}>{cellValue[props.num]}</td>;
//     }
//      random();
//     function clickBox(num) {
//       if (turn === "o" && cellValue[num] === "" && winner !== "x") {
//         cellValue[num] = "o";
//         checkWinner();
//         //console.log(winner === "x");
//         setTurn("x");
//         random();    
//       }
  
//     }
//     function random (){
//       if(winner !== "o"){
//        let arrayOfEmptyValues  = cellValue.reduce((aggr,value,index) => {
//           if(value.length === 0){
//            aggr.push(index);
//           }
//           return aggr;
//         },[]) 
//          let randomBoxId = arrayOfEmptyValues[Math.floor(Math.random() * arrayOfEmptyValues.length)];
//         arrayOfEmptyValues.splice(arrayOfEmptyValues.indexOf(+randomBoxId), 1);
//          cellValue[randomBoxId] = "x";
//          setCells([...cellValue]);
//          setTurn("o");
//          checkWinner();
//       }
//     }
  
  
//     function checkWinner() {
//       let allWiningCombs = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [6, 4, 2],
//       ];
  
//       allWiningCombs.forEach((winingComb) => {
//         if (
//           cellValue[winingComb[0]] === "x" &&
//           cellValue[winingComb[1]] === "x" &&
//           cellValue[winingComb[2]] === "x"
//         ) {
//           setWinner("x");
//         } else if (
//           cellValue[winingComb[0]] === "o" &&
//           cellValue[winingComb[1]] === "o" &&
//           cellValue[winingComb[2]] === "o"
//         ) {
//           setWinner("o");
//         }
//       });
//     }
  
//     function restartGame() {
//       setWinner(null);
//       setCells(Array(9).fill(""));
//       setTurn("x");
//     }
//     return (
//       <div>
//         <table>
//           <tbody>
//             <tr>
//               <Cell num={0} />
//               <Cell num={1} />
//               <Cell num={2} />
//             </tr>
//             <tr>
//               <Cell num={3} />
//               <Cell num={4} />
//               <Cell num={5} />
//             </tr>
//             <tr>
//               <Cell num={6} />
//               <Cell num={7} />
//               <Cell num={8} />
//             </tr>
//           </tbody>
//         </table>
  
//         {winner && (
//           <>
//             <div>{winner} is the winner</div>
//             <div>
//               <button onClick={() => restartGame()}>Play Again</button>
//             </div>
//           </>
//         )}
//         {winner === null && !cellValue.includes("") && (
//           <>
//             <div> Draw</div>
//             <div>
//               <button onClick={() => restartGame()}>Play Again</button>
//             </div>
//           </>
//         )}
//       </div>
//     );
//   }
//   export default PlayWithO;
