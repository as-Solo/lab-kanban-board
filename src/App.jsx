import Board from './components/Board'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/footer'
import data from '../src/data/data.json'
import About from './components/About'
import { useState } from 'react'

function App() {

  let datApp = data;
  const [pantallaPrincipal, setPantallaPrincipal] = useState(<Board data = {datApp}/>);

  return (
    <>
      <NavBar/>
      <div className='center-container'>
        <SideBar estado = {pantallaPrincipal} actualizar = {setPantallaPrincipal} data = {datApp}/>
        {/* <Board data = {datApp}/> */}
        {pantallaPrincipal}
      </div>
      <Footer/>
    </>
  )
}

export default App
