
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "../styles/EditTask.css"


function EditTask(props) {

    const {datApp, setDatApp, setToast } = props
    const { task } = useParams()

    let clone = structuredClone(datApp)

    const [card, setCard] = useState(clone.find(elem => elem.id === task))
    
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    const handleEditMode = (event)=>{
        setChecked(event.target.checked)
    }

    const handleChange = (event)=>{
        let cardClone = structuredClone(card);
        cardClone[event.target.name] = event.target.value

        setCard(cardClone)
    }

    const handleAddChanges = ()=>{
        let dataClone = structuredClone(datApp)
        const index = dataClone.findIndex((elem) => elem.id === task)
        dataClone[index] = card
        setDatApp(dataClone)

        setToast("Task updated successfully");
        navigate("/")
    }

    return (
        <div id="Edit-task">
            <div className="id-container">
                <p>id: {card.id}</p>
                <Link to={'/'}>
                    <button>⤺</button>
                </Link>
            </div>
            <div className="edit-columns-container">
                <div className="edit-task-column">
                    <div className="pareja cabecera">
                        <label htmlFor="title">title</label>
                        {!checked
                        ? <p>{card.title}</p>
                        : <input onChange={handleChange} value={card.title} type="text" name="title"/>
                        }
                    </div>
                    <div className="pareja">
                        <label htmlFor="status">status</label>
                        {!checked
                        ? <p>{card.status}</p>
                        : <select onChange={handleChange} value={card.status} type="text" name="status">
                            <option value="Backlog">Backlog</option>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                        }
                    </div>
                    <div className="pareja">
                        <label htmlFor="createdDate">created date</label>
                        <p>{card.createdDate}</p>
                    </div>
                </div>
                <div className="edit-task-column">
                    <div className="pareja cabecera">
                        <label htmlFor="assignee">assignee</label>
                        {!checked
                        ? <p>{card.assignee}</p>
                        : <input onChange={handleChange} value={card.assignee} type="text" name="assignee"/>
                        }
                    </div>
                    <div className="pareja">
                        <label htmlFor="priority">priority</label>
                        {!checked
                        ? <p>{card.priority}</p>
                        : <select onChange={handleChange} value={card.priority} type="text" name="priority">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        }
                    </div>
                    <div className="pareja">
                        <label htmlFor="dueDate">due date</label>
                        {!checked
                        ? <p>{card.dueDate}</p>
                        : <input onChange={handleChange} value={card.dueDate} type="date" name="dueDate"/>
                        }
                    </div>
                </div>
            </div>         
            <div className="pareja cabecera descripcion-container">
                <label htmlFor="description">description</label>
                {!checked
                ? <p id="description-p">{card.description}</p>
                : <textarea onChange={handleChange} value={card.description} type="text" name="description"/>
                }
            </div>
            
            <div className="edit-botonera">
                <div className="check-container">
                    <input type="checkbox" name='editMode' onChange={handleEditMode} className="check-edit-mode"/>
                    <button className="boton-check-edit">Edit Mode</button>
                </div>
                <button onClick={()=>handleAddChanges(clone)} className="boton-apply-changes">Apply Changes</button>
            </div>
        </div>
    )
}

export default EditTask