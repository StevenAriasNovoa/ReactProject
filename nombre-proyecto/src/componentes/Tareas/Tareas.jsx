import "./Tareas.css"


function Tareas (props){

    return (
    <div>
        <li className="lista">
        <input className="chechbox" type="checkbox" onChange={()=>{props.marcarTarea(props.id)}} checked={props.check} />
        <label> {props.texto}</label>
        <button className="delete btn btn-outline-light" onClick={()=>{props.borrar(props.id)}}>Delete</button>
        </li>
    </div>
    )
}

export default Tareas
