

function AddTask(props) {
    // const copiaData = [...props.data]
    // console.log(copiaData)

    const handleAddTask = (title, column, priority, dueDate, description = null, asignee = 'anonymous')=>{
        const newObject = {
            // "id": props.data.slice(props.data.length -1).id + 1,
            "id": props.data.at(-1).id + 1,
            "title": title,
            "description": description,
            "assignee": asignee,
            "status": column,
            "priority": priority,
            "createdDate": new Date().toLocaleDateString('en-CA'),
            "dueDate": dueDate.toDate()
        }
        const copiaData = [...props.data, newObject]
        props.setData(copiaData)
    }

    return (
        <div id="addTask">
            <div>
                <label htmlFor="tarea">title</label>
                <input type="text" name="tarea"/>
            </div>
            <div>
                <label htmlFor="descripcion">description</label>
                <input type="text" name="descripcion"/>
            </div>
            <div>
                <label htmlFor="encargado">assignee</label>
                <input type="text" name="encargado"/>
            </div>
            <div>
                <label htmlFor="columna">status</label>
                <select name="columna" id="lang">
                    <option value="Backlog">Backlog</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>

                </select>
            </div>
            <div>
                <label htmlFor="prioridad">priority</label>
                <select name="prioridad" id="lang">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            
            <div>
                <label htmlFor="deadline" >due date</label>
                <input type="date" name="deadline" min = {new Date().toLocaleDateString('en-CA')}/>
            </div>
            <button onClick={()=>handleAddTask()}>TaskFlow</button>
        </div>
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
