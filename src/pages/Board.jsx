import Columna from "../components/Columna"
import '../styles/Board.css'
import ojo from "../assets/Ojo.png"
import { useState } from "react";

function Board(props) {
  //datApp delete filter setFilter filterName setFilterName setDatApp
  const {filter, setFilter, datApp, filterName, setFilterName, setDatApp, orderBy, setOrderBy, invert, setInvert} = props;

  const handleFilter = (event) => {
    let clone = structuredClone(filter)
    if (event.target.checked){
      clone[event.target.name] = event.target.name
    }
    else{
      clone[event.target.name] = ''
    }
    setFilter(clone)
  };

  const handleFilterName = (event) => {
    let clone = filterName;
    clone = event.target.value
    setFilterName(clone)
  }
  
  let filterList = datApp.filter(elem => elem.assignee.toLowerCase().startsWith(filterName.toLowerCase()));
  let filterListName = filterList;
  
  
  if (filter.high || filter.medium || filter.low){
    // filterList = data.filter((card) => (card.priority.toLowerCase() === filter.high || card.priority.toLowerCase() === filter.medium || card.priority.toLowerCase() === filter.low))
    filterListName = []
    for (let elem in filter) {
      // filterList = filterList.concat(datApp.filter(card => card.priority.toLowerCase() === filter[elem]))
      filterListName = filterListName.concat(filterList.filter(card => card.priority.toLowerCase() === filter[elem]))
    };
  }

  const sortPropio = (a, b)=>{
    let aO = a[orderBy] || ''
    let bO = b[orderBy] || ''
    const priorityIndex = ["Low", "Medium", "High"]
    if (orderBy === 'priority'){
      aO = priorityIndex.indexOf(a[orderBy]).toString()
      bO = priorityIndex.indexOf(b[orderBy]).toString()
      console.log(aO, bO)
    }
    return invert ? (aO.localeCompare(bO)) : (bO.localeCompare(aO))
  }
  filterListName.sort((a, b)=> sortPropio(a, b))
  // console.log(orderBy)
  //* // se podria hacer con un reduce??  // la respuesta es que no se puede porque filter no es una lista 😅
  // filter.reduce((lista, elem)=>{lista.concat.data.filter(card => card.priority.toLowerCase() === elem)}, [])
  // console.log(filterList)

  let backlogList = filterListName.filter((card) => card.status === "Backlog");
  let inProgressList = filterListName.filter((card)=> card.status === "In Progress" );
  let toDoList = filterListName.filter((card)=> card.status === "To Do");
  let doneList = filterListName.filter((card)=> card.status === "Done");

  const [cardSelected, setCardSelected] = useState(null) 
  
  const handleDragOver = (event)=>{
    event.preventDefault()
  }

  const handleDrop= (event, name, cardSelected)=>{
    event.preventDefault()
    if(name){
      let clone = structuredClone(datApp)
      let index = clone.findIndex(elem=>elem.id === cardSelected.id)

      clone[index] = cardSelected
      clone[index].status = name

      
      setDatApp(clone)
      setCardSelected(null)
    }
  }

  const handleOrderBy = (event)=>{
    // console.log(event.target.value)
    setOrderBy(event.target.value)
  }

  const handleInvert = (event)=>{
    setInvert(event.target.checked)
  }

  return (
    <>
      <div className="fondo-botonera">
        {/* <h1>{`${filter.high} - ${filter.medium} - ${filter.low}`}</h1> */}
        <div className="botonera">
          <div className="filtros">
            <div style={{backgroundColor:'rgb(114, 26, 26)'}}>
              <input name={'high'} onClick={handleFilter} type="checkbox" />
              <img className="img-check" src={ojo} alt="" />
            </div> 
            <div style={{backgroundColor:'rgb(177, 100, 0)'}}>
              <input name={'medium'} onClick={handleFilter} type="checkbox" />
              <img className="img-check" src={ojo} alt="" />
            </div> 
            <div style={{backgroundColor:'rgb(0, 100, 0)'}}>
              <input name={'low'} onClick={handleFilter} type="checkbox" />
              <img className="img-check" src={ojo} alt="" />
            </div>
          </div>
          <div>
            <label htmlFor="assignee">Assignee: </label>
            <input onChange={handleFilterName} type="text" name="assignee" value={filterName}/>
          </div>
          <div className="order-by-container">
            <select onChange={()=>handleOrderBy(event)} name="orderBy" id="orderBy" value={orderBy}>
              <option value="title">title</option>
              <option value="assignee">assignee</option>
              <option value="priority">priority</option>
              <option value="createdDate">created date</option>
              <option value="dueDate">due date</option>
            </select>
            <div className="order-by-checkbox">
              <input onChange={()=>handleInvert(event)} type="checkbox" value={invert}/>
              <p>{invert ? '⇵' : '⇅'}</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div id="board">
          <Columna data = {backlogList} delete={props.delete} setDatApp={setDatApp} datApp={datApp} handleDragOver={handleDragOver} handleDrop={handleDrop} cardSelected={cardSelected} setCardSelected={setCardSelected}>Backlog</Columna>
          <Columna data = {toDoList} delete={props.delete} setDatApp={setDatApp} datApp={datApp} handleDragOver={handleDragOver} handleDrop={handleDrop} cardSelected={cardSelected} setCardSelected={setCardSelected}>To Do</Columna>
          <Columna data = {inProgressList} delete={props.delete} setDatApp={setDatApp} datApp={datApp} handleDragOver={handleDragOver} handleDrop={handleDrop} cardSelected={cardSelected} setCardSelected={setCardSelected}>In Progress</Columna>
          <Columna data = {doneList} delete={props.delete} setDatApp={setDatApp} datApp={datApp} handleDragOver={handleDragOver} handleDrop={handleDrop} cardSelected={cardSelected} setCardSelected={setCardSelected}>Done</Columna>
      </div>
    </>
  )
}

export default Board