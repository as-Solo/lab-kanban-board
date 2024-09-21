import Columna from "../components/Columna"
import { useState } from "react";

function Board(props) {
  //props.data => [{card}, {card},...]
  // const {filter, setFilter} = props;

  const handleFilter = () => props.setFilter(!props.filter);

  
  let backlogList = props.data.filter((card) => card.status === "Backlog");
  let inProgressList = props.data.filter((card)=> card.status === "In Progress" );
  let toDoList = props.data.filter((card)=> card.status === "To Do" && props.filter);
  let doneList = props.data.filter((card)=> card.status === "Done");

  return (
    <div id="board">
        <button onClick={handleFilter}>XXXX</button>      
        <Columna data = {backlogList} delete={props.delete}>Backlog</Columna>
        <Columna data = {toDoList} delete={props.delete}>To Do</Columna>
        <Columna data = {inProgressList} delete={props.delete}>Progress</Columna>
        <Columna data = {doneList} delete={props.delete}>Done</Columna>
    </div>
  )
}

export default Board