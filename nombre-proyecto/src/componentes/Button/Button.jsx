import "./Button.css"


function Boton (props){

    return (
    <div className="botones">
    <input className="input btn btn-outline-light" type="text" placeholder="Ingresar Tareas" onChange={props.onChange} key={props.key} />
    <button className="add  btn btn-outline-light"  onClick={props.ponerTareas} >ADD</button>
    {/* <br />
    <br />
    <input className="inputSearch btn btn-outline-light" type="text" placeholder="buscar tarea" />
    <button className="search btn btn-outline-light">SEARCH</button> */}
    </div>
    )

}
export default Boton