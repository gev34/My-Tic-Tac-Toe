import "./Table.css";
function MainPage(){
  return (
      <form> 
      <input type = "text" class = "text" />
      <input type="button" onclick="createTable()" value="Create the table" /> 
      </form>
  )
}

function CreateCells() {
  <CreateTable/>
  let count = document.querySelector(".text").value;

  for (let r = 0; r < count; r++) {
    table.insertRow(r);
    for (let c = 0; c < count; c++) {
      let y = table.insertCell(c);
      y.innerHTML = "A";
    }
  }
}

function CreateTable(){
  return(
    <table>
      
    </table>
  )
}
export default CreateTable ;
export {MainPage};

  /* <table id="myTable" border="1"> 
</table><form> 
<input type = "text" class = "text">
<input type="button" onclick="createTable()" value="Create the table"> 
</form> */

