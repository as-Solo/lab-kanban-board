
function NavBar(props) {
  return (
    <header id="navbar">
      <div className="bgLogos">
        <img src="./src/assets/prueba.png" alt="logo app" className="logoKanbas"/>
        <h1>Task<span>F</span>low</h1>
        <img className="menu-btn" onClick={props.handle} src="./src/assets/menu.png" alt="menu icon"/>
      </div>
    </header>
  )
}

export default NavBar