import "./Table.css";


let arr = [];
function createTable() {
  let count = document.querySelector(".text").value;

  for (let r = 0; r < count; r++) {
    let x = document.getElementById("myTable").insertRow(r);
    for (let c = 0; c < count; c++) {
      let y = x.insertCell(c);
      y.innerHTML = "A";
    }
  }
}

const CreateTableTest = () => {
  return(
    <table>
      {inchvorban.map(()=>(
        <td>
          {}
        </td>
      ))}
    </table>
  )
}

  /* <table id="myTable" border="1"> 
</table><form> 
<input type = "text" class = "text">
<input type="button" onclick="createTable()" value="Create the table"> 
</form> */

