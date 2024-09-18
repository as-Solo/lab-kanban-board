import Columna from "./Columna"

function Board(props) {
  //props.data => [{card}, {card},...]

  let backlogList = props.data.filter((card) => card.status === "Backlog");
  let inProgressList = props.data.filter((card)=> card.status === "In Progress");
  let toDoList = props.data.filter((card)=> card.status === "To Do");
  let doneList = props.data.filter((card)=> card.status === "Done");

  return (
    <div id="board">      
        <Columna data = {backlogList}>Backlog</Columna>
        <Columna data = {toDoList}>To Do</Columna>
        <Columna data = {inProgressList}>Progress</Columna>
        <Columna data = {doneList}>Done</Columna>
    </div>
  )
}

export default Board