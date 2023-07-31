import React, { useState } from 'react'

function Buscador (props) {

    function search(event) {
        event.preventDefault()
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
            < input onKeyDown = { detectarTecla2 } value={props.NuevoImput} onChange={imputChange2}  placeholder="Enter your text..." className="input" name="text" type="text"/>
        </div >
    )
}

export default Buscador