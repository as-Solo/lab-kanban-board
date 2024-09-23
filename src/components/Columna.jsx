import { useState } from "react"
import Card from "./Card"


function Columna(props) {
    
  const {data, datApp, setDatApp, cardSelected, setCardSelected, handleDragOver, handleDrop} = props

  return (
    <div className="columna" onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, props.children, cardSelected)}>
      <h4>{props.children} </h4>
      <hr />
      <div className="columnaContenido">
          {data.map((carta)=> <Card key={carta.id} card = {carta} deleteCard={props.delete} datApp={datApp} setDatApp={setDatApp} setCardSelected={setCardSelected}/>)}
      </div>
    </div>
  );
}

export default Columna