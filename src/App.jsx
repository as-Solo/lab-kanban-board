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
import EditTask from './pages/EditTask'
import Toast from './components/Toast'

// Molaria añadirle un valor a las fichas que fuera fecha ded modificacion, y que cada vez que se cambiase algo en la ficha
// el valor tomase el today para luego ordenarlas en las columnas por ese valor
// de mas antigua a mas nueva.

function App() {

  const [datApp, setDatApp] = useState(data);
  const [showSideBar, setShowSideBar] = useState(false);
  const [filterName, setFilterName] = useState('')
  const [filter, setFilter] = useState({high:'', medium:'', low:''});
  
  const [toast, setToast] = useState("");

  const handleDelete = (index)=>{
    const copia = [...datApp]
    setDatApp(copia.filter((elem)=>elem.id !== index))

    setToast("Task deleted");

    let timer = setTimeout(()=>{
      setToast("");
      clearTimeout(timer);
    }, 2500)
  }

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  return (

    <div id='App'>
      <NavBar handle={handleSideBar}/>
      
      <div className='center-container'>
        {showSideBar ? (<SideBar />) : null}
        <Routes>
          <Route path={"/"} element= {<Board datApp={datApp} delete={handleDelete} filter={filter} setFilter={setFilter} filterName={filterName} setFilterName={setFilterName} setDatApp={setDatApp}/>}/>
          <Route path={"/AddTask"} element= {<AddTask datApp={datApp} setData={setDatApp} setToast={setToast}/>}/>
          <Route path={"/About"} element= {<About/>}/>
          <Route path={"/Board/:task"} element= {<EditTask datApp={datApp} delete={handleDelete} filter={filter} setFilter={setFilter} filterName={filterName} setFilterName={setFilterName} setDatApp={setDatApp} setToast={setToast}/>}/>
          <Route path={"*"} element= {<NotFound/>}/>
        </Routes>        
      </div>
      {toast && <Toast message={toast}/>}
      <Footer/>
    </div>
  )
}

export default App
