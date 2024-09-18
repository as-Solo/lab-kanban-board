import About from "./About"
import Board from "./Board"
import AddTask from "./AddTask"

function SideBar(props) {

  const handleCosas = (event)=>{
    {console.log(event)}
    if (event.target.id === "Board"){

      {props.actualizar(<Board data = {props.data}/>)}
    }
    else if (event.target.id === "AddTask"){
      
      {props.actualizar(<AddTask/>)}
    }
    else if (event.target.id === "About"){
      {props.actualizar(<About/>)}
      
    }
  }

  return (
    <nav id="sidebar">
    
    <button id="Board" onClick={handleCosas}>Board</button>
    <button id="AddTask" onClick={handleCosas}>Add Task</button>
    <button id="About" onClick={handleCosas}>About</button>
    
    </nav>
  )
}

export default SideBar