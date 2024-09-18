import Card from "./Card"


function Columna(props) {
    
//   console.log(props)
    
  return (
    <div className="columna">
      <h4>{props.children} </h4>
      <hr />
      <div className="columnaContenido">
          {props.data.map((carta)=> <Card key={carta.id} data = {carta}/>)}
      </div>
    </div>
  );
}

export default Columna