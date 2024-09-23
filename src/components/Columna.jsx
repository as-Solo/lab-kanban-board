import { useState } from "react"
import Card from "./Card"


function Columna(props) {
    
//   console.log(props)
  const {data, datApp, setDatApp, cardSelected, setCardSelected, handleDragOver, handleDrop} = props

  return (
    <div className="columna" onDragOver={(event)=>handleDragOver(event)} onDrop={(event) => handleDrop(event, props.children, cardSelected)}>
      <h4>{props.children} </h4>
      <hr />
      <div className="columnaContenido">
          {data.map((carta)=> <Card key={carta.id} card = {carta} deleteCard={props.delete} datApp={datApp} setDatApp={setDatApp} cardSelected={cardSelected} setCardSelected={setCardSelected}/>)}
      </div>
    </div>
  );
}

export default Columna