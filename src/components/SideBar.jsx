import {Link} from 'react-router-dom'

function SideBar() {

 
  return (
    <nav id="sidebar">
    
    <Link to={'/'}><button>Board</button></Link>
    <Link to={'/AddTask'}><button>Add Task</button></Link>
    <Link to={'/About'}><button>About</button></Link>
    
    </nav>
  )
}

export default SideBar