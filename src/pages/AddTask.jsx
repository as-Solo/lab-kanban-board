import { useState } from "react";

function AddTask({data, setData}) {

    const [newTask, setNewTask] = useState({
        id: +data.at(-1).id + 1,
        title: "", 
        description: "", 
        assignee: 'anonymous',
        status: "Backlog", 
        priority: "", 
        createdDate: new Date().toLocaleDateString('en-CA'),
        dueDate: "", 
    });

    const handleChange = (event) => {
        const clone = structuredClone(newTask);
        clone[event.target.name] = event.target.value;

        setNewTask(clone)
    };

    const handleAddTask = (event) => {
        event.preventDefault();

        setData((current)=> [...current, newTask]);
    }

    return (
        <form id="addTask" onSubmit={handleAddTask}>
            <div>
                <label htmlFor="title">title</label>
                <input onChange={handleChange} value={newTask.title} type="text" name="title"/>
            </div>
            <div>
                <label htmlFor="description">description</label>
                <input onChange={handleChange} value={newTask.description} type="text" name="description"/>
            </div>
            <div>
                <label htmlFor="assignee">assignee</label>
                <input onChange={handleChange} value={newTask.assignee} type="text" name="assignee"/>
            </div>
            <div>
                <label htmlFor="status">status</label>
                <select onChange={handleChange} value={newTask.status} name="status" id="lang">
                    <option value="Backlog">Backlog</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>

                </select>
            </div>
            <div>
                <label htmlFor="priority">priority</label>
                <select onChange={handleChange} value={newTask.priority} name="priority" id="lang">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="dueDate" >due date</label>
                <input onChange={handleChange} value={newTask.dueDate} type="date" name="dueDate" min = {new Date().toLocaleDateString('en-CA')}/>
            </div>
            <button>TaskFlow</button>
        </form>
    )
}

export default AddTask



{/* <label for="date-input">Select a date:</label>
 <input type="date" id="date-input" name="date-input">

<button onclick="checkDate()">Check Date</button>

<script>
  function checkDate() {
    const dateInput = document.getElementById('date-input').value;
    if (!dateInput) {
      alert('Please select a date');
    } else {
      alert('Selected date is: ' + dateInput);
    }
  }
</script> */}


// const year = today.getFullYear();
// const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes empieza desde 0, por eso se suma 1
// const day = String(today.getDate()).padStart(2, '0');

// const todayFormatted = `${year}-${month}-${day}`;

// const today = new Date().toLocaleDateString('en-CA');
