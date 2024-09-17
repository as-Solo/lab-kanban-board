import Board from './components/Board'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/footer'

function App() {


  return (
    <>
      <NavBar/>
      <div className='center-container'>
        <SideBar/>
        <Board/>
      </div>
      <Footer/>
    </>
  )
}

export default App
