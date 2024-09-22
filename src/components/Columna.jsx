import Card from "./Card"


function Columna(props) {
    
//   console.log(props)
  const {data, datApp, setDatApp} = props
    
  return (
    <div className="columna">
      <h4>{props.children} </h4>
      <hr />
      <div className="columnaContenido">
          {data.map((carta)=> <Card key={carta.id} card = {carta} deleteCard={props.delete} datApp={datApp} setDatApp={setDatApp}/>)}
      </div>
    </div>
  );
}

export default Columna