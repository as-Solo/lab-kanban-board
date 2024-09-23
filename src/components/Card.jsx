import { Link } from "react-router-dom";
import "../styles/Card.css"
import trash from"../assets/trash.png"

function Card(props){
    // {id, title, description, assignee, status, priority, createdDate, dueDate}

    const { card, deleteCard, setDatApp, datApp, cardSelected, setCardSelected } = props
    //calcular Date
    const dueDate = new Date(props.card.dueDate);
    const today = new Date();
    let dias = ((dueDate - today) / (1000 * 60 * 60 * 24));
    let horas = (dias % 1) * 24;
    const columns = ["Backlog", "To Do", "In Progress", "Done"]
    
    const handleChangeColumn = (event)=>{
        let indexColumn = columns.indexOf(card.status) + +event.target.id
        let clone = structuredClone(datApp)
        // console.log(clone)
        let object = clone.find((elem) => elem.id === card.id)
        // console.log(object)
        object.status = columns[indexColumn]
        // console.log(clone)
        setDatApp(clone)
    }

    const handleDragStart = (event) => {
        // console.log('Hola')
        const clone = structuredClone(datApp)
        const carta = clone.find((card) => {
          return card.id == event.target.id;
        });
        // console.log(carta)
        setCardSelected(carta)
      };

    let backgroundPriority;
    if (card.priority === "High"){
        backgroundPriority = 'rgb(114, 26, 26)'
    }
    else if (card.priority === "Medium"){
        backgroundPriority = 'rgb(177, 100, 0)'
    }
    else if (card.priority === "Low"){
        backgroundPriority = 'rgb(0, 100, 0)'
    }
    
    return(
        <div className="redondeadito" draggable={true} onDragStart={(event)=>handleDragStart(event)} onDragEnd={(event)=>handleDragStart(event)} id ={card.id}>
                <div className="ficha">
                <Link to={`/Board/${card.id}`}>
                    <div className="fichaHeader">
                        <div className="prioridad" style={{backgroundColor: backgroundPriority}}>{/*props.card.priority*/}</div>
                        <div className="tiempoRestante fechas">
                        {card.status === "Done" 
                        ? <p style={{color: 'rgb(40, 180, 40)', fontStyle:'italic'}}>Finished!!</p>
                        : dias >= 0
                        ? (<p>{Math.floor(dias)} <span>days </span>{Math.floor(horas)} <span>hours</span></p>)
                        : <p style={{color: 'rgb(40, 80, 40)'}}>Overdue</p>
                        }
                        </div>
                    </div>
        </Link>
                    <div className="fichaFaldon">
                        {columns.indexOf(card.status) !== 0 && <div onClick={()=>handleChangeColumn(event)} className="selector previous" id={'-1'}>&lt;</div>}
                            <div className="tarea">&lt;{card.title}/&gt;</div>
                        {columns[columns.length - 1] !== card.status &&  <div onClick={()=>handleChangeColumn(event)} className="selector next" id={'+1'}>&gt;</div>}
                    

                    </div>
                    <div className="asignado">
                        <p style={{visibility: card.assignee ? 'visible':'hidden'}}>{card.assignee}</p>
                        <button className="eliminar" onClick={()=>deleteCard(card.id)}>
                            X{/* <img src={trash} alt="" /> */}
                            {/* <div></div> */}
                        </button>
                    </div>
                    
                </div>
            </div>
    );
}

export default Card;