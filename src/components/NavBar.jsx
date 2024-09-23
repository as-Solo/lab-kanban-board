import logoPostIt from '../assets/prueba.png'
import menuIcon from '../assets/menu.png'


function NavBar(props) {
  return (
    <header id="navbar">
      <div className="bgLogos">
        <img src= {logoPostIt} alt="logo app" className="logoKanbas"/>
        <h1>Task<span>F</span>low</h1>
        <img className="menu-btn" onClick={props.handle} src={menuIcon} alt="menu icon"/>
      </div>
    </header>
  )
}

export default NavBar