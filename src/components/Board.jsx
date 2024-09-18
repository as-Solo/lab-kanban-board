function Board(props) {
  return (
    <div id="board">
      {/* Evidentemente esto se convertiran en componentes, pero para hacerme una idea */}
      {/*
      No me termina de convencar la ficha, he estadop mirando como lo tienen en trello, molaria que
      dejasemos la ficha mucho mas minimalista solo con la tarea, la breve descripcion y los dias
      restantes y que si pinchas en ella salga una ampliacion de la ficha con toda la info.
      */}
      <div className="columna">Backlog <hr />
        <div className="columnaContenido">
          
        </div>
      </div>
      <div className="columna">To Do <hr /></div>
      <div className="columna">In Progress <hr /></div>
      <div className="columna">Done <hr /></div>
    </div>
  )
}

export default Board