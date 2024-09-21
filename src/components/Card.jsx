
function Card(props){
    // {id, title, description, assignee, status, priority, createdDate, dueDate}

    //calcular Date
    const dueDate = new Date(props.data.dueDate);
    const today = new Date();
    let dias = ((dueDate - today) / (1000 * 60 * 60 * 24));
    let horas = (dias % 1) * 24;

    return(
        <div className="ficha">
            <div className="fichaHeader">
                <div className="prioridad">{/*props.data.priority*/}</div>
                <div className="Tarea">{props.data.title}</div>
                <button className="eliminar" onClick={()=>props.delete(props.data.id)}>❌</button>
            </div>
            {/* <div className="descripcion">Create a visually appealing landing page for the website.</div> */}
            <div className="fichaFaldon">
                {/* <div className="fechaCreacion fechas">
                <p className="detalle">create</p>
                <p>{props.data.createdDate}</p>
                </div>
                <hr /> */}
            </div>
            <div className="asignado">
                <p>{props.data.assignee}</p>
                <div className="tiempoRestante fechas">
                    {
                        dias >= 0 ? 
                        (<p>{Math.floor(dias)} <span>d </span>{Math.floor(horas)} <span>h. restantes</span></p>) : <p>Out of Date</p>
                    }
                    {/* <p>{Math.floor(dias)} <span>días y </span>{Math.floor(horas)} <span>h. restantes</span></p> */}
                    
                
                </div>
            </div>
        </div>
    );
}

export default Card;