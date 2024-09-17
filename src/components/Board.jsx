function Board(props) {
  return (
    <div id="board">
      {/* Evidentemente esto se convertiran en componentes, pero para hacerme una idea */}
      <div className="columna">Backlog <hr /></div>
      <div className="columna">To Do <hr /></div>
      <div className="columna">In Progress <hr /></div>
      <div className="columna">Done <hr /></div>
    </div>
  )
}

export default Board