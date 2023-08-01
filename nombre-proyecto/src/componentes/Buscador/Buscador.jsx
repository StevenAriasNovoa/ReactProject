import React, { useState } from 'react'

function Buscador (props) {

    function search() {
        props.searchTarea(props.NuevoImput)
    }

    function detectarTecla2(event) {
        console.log()
        if (event.key === "Enter") {
            search(event)
        }
    }

    function imputChange2(event) {
        props.setNuevoImput(event.target.value);
    }

    return (
        <div>
            < input onKeyDown = { detectarTecla2 } value={props.NuevoImput} onChange={imputChange2}  placeholder="text Search" className="inputSearch btn btn-outline-light" name="text" type="text"/>
            <button className="search btn btn-outline-light">SEARCH</button>
        </div >
    )
}

export default Buscador