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
          <div className="ficha">
            <div className="fichaHeader">
              <div className="prioridad"></div>
              <div className="Tarea">Design Landing Page</div>
            </div>
            <div className="descripcion">Create a visually appealing landing page for the website.</div>
            <div className="asignado">
              <p>assignee:</p>
              <p>Mary Davis</p>
            </div>
            <div className="fichaFaldon">
              <div className="fechaCreacion fechas">
                <p className="detalle">create</p>
                <p>2023-09-15</p>
              </div>
              <hr />
              <div className="tiempoRestante fechas">
                <p>8</p>
                <p className="detalle">días restantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columna">To Do <hr /></div>
      <div className="columna">In Progress <hr /></div>
      <div className="columna">Done <hr /></div>
    </div>
  )
}

export default Board