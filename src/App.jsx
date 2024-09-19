import Board from './pages/Board'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import data from '../src/data/data.json'
import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import AddTask from './pages/AddTask'
import About from './pages/About'
import NotFound from './pages/NotFound'
function App() {

  const [datApp, setDatApp] = useState(data);
 
  const handleDelete = (index)=>{
    const copia = [...datApp]
    setDatApp(copia.filter((elem)=>elem.id !== index))
  }

  return (

    <div id='App'>
      <NavBar/>
      <div className='center-container'>
        <SideBar/>
        <Routes>
          <Route path={"/"} element= {<Board data={datApp} delete={handleDelete}/>}/>
          <Route path={"/AddTask"} element= {<AddTask data={datApp} setData={setDatApp}/>}/>
          <Route path={"/About"} element= {<About/>}/>
          <Route path={"*"} element= {<NotFound/>}/>
        </Routes>        
      </div>
      <Footer/>
    </div>
  )
}

export default App
