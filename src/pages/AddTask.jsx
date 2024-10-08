import { useNavigate } from 'react-router-dom';
import '../styles/AddTask.css'
import { useState } from "react";

function AddTask({datApp, setData, setToast}) {

    const [newTask, setNewTask] = useState({
        id: +datApp.at(-1).id + 1,
        title: "", 
        description: "", 
        assignee: 'Unassigned',
        status: "Backlog", 
        priority: "Medium", 
        createdDate: new Date().toLocaleDateString('en-CA'),
        dueDate: "", 
    });

    const navigate = useNavigate("/");

    const handleChange = (event) => {
        const clone = structuredClone(newTask);
        clone[event.target.name] = event.target.value;

        setNewTask(clone)
    };

    const handleAddTask = (event) => {
        event.preventDefault();

        setData((current)=> [...current, newTask]);
        setNewTask({
            id: +datApp.at(-1).id + 2,
            title: "", 
            description: "", 
            assignee: 'Unassigned',
            status: "Medium", 
            priority: "", 
            createdDate: new Date().toLocaleDateString('en-CA'),
            dueDate: "", 
        })

        setToast(" Task created successfully");

        navigate("/");
    }

    return (
        <form id="addTask" onSubmit={handleAddTask}>
            
            <div className='add-task-cabecera'>
                <div className='add-task-title'>
                    <label htmlFor="title">title</label>
                    <input onChange={handleChange} value={newTask.title} type="text" name="title" placeholder='Task name'/>
                </div>
                <div className='add-task-assignee'>
                    <label htmlFor="assignee">assignee</label>
                    <input onChange={handleChange} value={newTask.assignee} type="text" name="assignee"/>
                </div>
            </div>


            <div className='add-task-description'>
                <label htmlFor="description">description</label>
                <textarea onChange={handleChange} value={newTask.description} type="text" name="description"  placeholder="Brief description of the task. Where it comes from and where it's headed. Events to keep in mind, expectations, and precautions."/>
            </div>

            <div className='add-task-desplegables'>
                <div className='add-task-status'>
                    <label htmlFor="status">status</label>
                    <select onChange={handleChange} value={newTask.status} name="status" id="lang">
                        <option value="Backlog">Backlog</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className='add-task-priority'>
                    <label htmlFor="priority">priority</label>
                    <select onChange={handleChange} value={newTask.priority} name="priority" id="lang">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>

            
            <div className='add-task-due-date'>
                <label htmlFor="dueDate" >due date</label>
                <input onChange={handleChange} value={newTask.dueDate} type="date" name="dueDate" min = {new Date().toLocaleDateString('en-CA')}/>
            </div>
            <div className='centrar-button'>
                <button className='button-add-task'>TaskFlow</button>
            </div>
        </form>
    )
}

export default AddTask