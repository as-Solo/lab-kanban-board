import {Link} from 'react-router-dom'

function SideBar() {

 
  return (
    <nav id="sidebar">
    
    <Link to={'/'}><button id="Board">Board</button></Link>
    <Link to={'/AddTask'}><button id="AddTask">Add Task</button></Link>
    <Link to={'/About'}><button id="About">About</button></Link>
    
    </nav>
  )
}

export default SideBar