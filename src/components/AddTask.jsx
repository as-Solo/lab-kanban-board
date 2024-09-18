function AddTask() {
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
            <input type="text" name="columna"/>
        </div>
        <div>
            <label htmlFor="prioridad">priority</label>
            <input type="number" min={0} max={5} name="prioridad"/>
        </div>
        
        <div>
            <label htmlFor="deadline">due date</label>
            <input type="date" name="deadline"/>
        </div>

    </div>
  )
}

export default AddTask