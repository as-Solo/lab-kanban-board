import Columna from "../components/Columna"
import '../styles/Board.css'
import ojo from "../assets/Ojo.png"
// import { useState } from "react";

function Board(props) {
  //props.data => [{card}, {card},...]
  const {filter, setFilter, data} = props;

  const handleFilter = (event) => {
    let clone = structuredClone(filter)
    // console.log(event.target.name)
    // console.log(event.target.checked)
    if (event.target.checked){
      clone[event.target.name] = event.target.name
    }
    else{
      clone[event.target.name] = ''
    }
    setFilter(clone)
  };

  let filterList = data;
  if (filter.high || filter.medium || filter.low){
    // filterList = data.filter((card) => (card.priority.toLowerCase() === filter.high || card.priority.toLowerCase() === filter.medium || card.priority.toLowerCase() === filter.low))
    filterList = []
    for (let elem in filter) {
      // console.log(elem)
      filterList = filterList.concat(data.filter(card => card.priority.toLowerCase() === filter[elem]))
    };
  }

  //* // se podria hacer con un reduce??  // la respuesta es que no se puede porque filter no es una lista 😅
  // filter.reduce((lista, elem)=>{lista.concat.data.filter(card => card.priority.toLowerCase() === elem)}, [])

  console.log(filterList)

  let backlogList = filterList.filter((card) => card.status === "Backlog");
  let inProgressList = filterList.filter((card)=> card.status === "In Progress" );
  let toDoList = filterList.filter((card)=> card.status === "To Do" && props.filter);
  let doneList = filterList.filter((card)=> card.status === "Done");

  return (
    <>
      <div className="fondo-botonera">
        {/* <h1>{`${filter.high} - ${filter.medium} - ${filter.low}`}</h1> */}
        <div className="botonera">
          <div className="filtros">
            <div style={{backgroundColor:'rgb(114, 26, 26)'}}>
              <input name={'high'} onClick={()=>handleFilter(event)} type="checkbox" />
              <img className="img-check" src={ojo} alt="" />
            </div> 
            <div style={{backgroundColor:'rgb(177, 100, 0)'}}>
              <input name={'medium'} onClick={()=>handleFilter(event)} type="checkbox" />
              <img className="img-check" src={ojo} alt="" />
            </div> 
            <div style={{backgroundColor:'rgb(0, 100, 0)'}}>
              <input name={'low'} onClick={()=>handleFilter(event)} type="checkbox" />
              <img className="img-check" src={ojo} alt="" />
            </div>
          </div>
          <div>
            <label htmlFor="assignee">Assignee: </label>
            <input type="text" name="assignee"/>
          </div>
        </div>
        <hr />
      </div>
      <div id="board">
          <Columna data = {backlogList} delete={props.delete}>Backlog</Columna>
          <Columna data = {toDoList} delete={props.delete}>To Do</Columna>
          <Columna data = {inProgressList} delete={props.delete}>Progress</Columna>
          <Columna data = {doneList} delete={props.delete}>Done</Columna>
      </div>
    </>
  )
}

export default Board