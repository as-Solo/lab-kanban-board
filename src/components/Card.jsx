import "../styles/Card.css"
function Card(props){
    // {id, title, description, assignee, status, priority, createdDate, dueDate}

    //calcular Date
    const dueDate = new Date(props.data.dueDate);
    const today = new Date();
    let dias = ((dueDate - today) / (1000 * 60 * 60 * 24));
    let horas = (dias % 1) * 24;
    
    // <div className="Tarea">{props.data.title}</div>
    // <button className="eliminar" onClick={()=>props.delete(props.data.id)}>❌</button>
    {/* <div className="fechaCreacion fechas">
                <p className="detalle">create</p>
                <p>{props.data.createdDate}</p>
                </div>
                <hr /> */}
    {/* <div className="descripcion">Create a visually appealing landing page for the website.</div> */}
    // ? (<p>{Math.floor(dias)} <span>d </span>{Math.floor(horas)} <span>h. restantes</span></p>)


    let backgroundPriority;
    if (props.data.priority === "High"){
        backgroundPriority = 'rgb(114, 26, 26)'
    }
    else if (props.data.priority === "Medium"){
        backgroundPriority = 'rgb(177, 100, 0)'
    }
    else if (props.data.priority === "Low"){
        backgroundPriority = 'rgb(0, 100, 0)'
    }
    
    return(
        <div className="ficha">
            <div className="fichaHeader">
                <div className="prioridad" style={{backgroundColor: backgroundPriority}}>{/*props.data.priority*/}</div>
                <div className="tiempoRestante fechas">
                {dias >= 0
                    ? (<p>{Math.floor(dias)} <span>days </span>{Math.floor(horas)} <span>hours</span></p>)
                    : <p style={{color: 'rgb(40, 80, 40)'}}>Overdue</p>
                }
                </div>
            </div>
            <div className="fichaFaldon">
                <div className="tarea">&lt;{props.data.title}/&gt;</div>
            </div>
            <div className="asignado">
                <p>{props.data.assignee}</p>
                <button className="eliminar" onClick={()=>props.delete(props.data.id)}>❌</button>
            </div>
            
        </div>
    );
}

export default Card;