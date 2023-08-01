import "./Todooapp.css"
import React from 'react'
import { useState, useEffect } from 'react'
import Titulo, { TareasC } from '../../componentes/Titulos/Titulos'
import { v4 as uuidv4 } from 'uuid';
import Tareas from "../../componentes/Tareas/Tareas";
import Boton from "../../componentes/Button/Button"
import NoHayTarea from "../../componentes/Oculto/Oculto";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Buscador from "../../componentes/Buscador/Buscador";

function Todooapp() {

    function getLocalStroge() {
        //localStorage.getItem
        const listaStroge = localStorage.getItem("listaTareas");
        const listaConvertida = JSON.parse(listaStroge);
        return listaConvertida;
    }

    const [IndiceTareas, setIndiceTareas] = useState([])
    const [inpuValue, setInputValue] = useState("");
    const [contador, setcontador] = useState(0);

    const navigate = useNavigate();

    // useEffect(() => { contadorchecks() },[setIndiceTareas])

    function saveLocalStroge() {
        localStorage.setItem("listaTareas", JSON.stringify(IndiceTareas))  //convertir a cadena de texto
    }
    // hook para detectar when many one cambio
    // useEffect(() => {
    //     saveLocalStroge()
    // }, [IndiceTareas])
    // ---------------waaaaaaaaaaaa----------

    function actualizarTareasUsuarios(listaAy) {
        const usuario = sessionStorage.getItem("sesion")
        const usuarioData = JSON.parse(usuario)
        if (usuarioData) {
            localStorage.setItem
                ("indiceTareas" + usuarioData.name.trim(), JSON.stringify(listaAy))
        }
        setInputValue("");
        // contadorchecks(listaAy);
    }


    function ponerTareas() {
        if (inpuValue.trim().length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tarea vacia'
            })
            return;
        }
        if (Validaciones(inpuValue)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tarea repetida'
            })
            return;
        }

        let listaAy = [...IndiceTareas]
        listaAy.push(  // push pa guardar, lo del parentesis es lo que guardara
            {
                id: uuidv4(),   //tambien se puede con get time y fecha 
                texto: inpuValue,
                rayitaNike: false

            });
        setIndiceTareas(listaAy);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 700
        })

        const usuario = sessionStorage.getItem("sesion")
        const usuarioData = JSON.parse(usuario)
        if (usuarioData) {
            localStorage.setItem("indiceTareas" + usuarioData.name.trim(), JSON.stringify(listaAy))
        }

    }

    useEffect(() => {

        const usuario = sessionStorage.getItem("sesion")
        const usuarioData = JSON.parse(usuario)

        if (usuarioData) {
            const tareasDelUsuario = localStorage.getItem("indiceTareas" + usuarioData.name.trim())
            const tareasDelUsuarioObj = JSON.parse(tareasDelUsuario) ?? [];
            setIndiceTareas(tareasDelUsuarioObj);
            contadorChecksLocal(tareasDelUsuarioObj);
        } else {
            navigate("/login")
        }
    }, [])

    function inputChange(event) {
        setInputValue(event.target.value);

    }

    function Eliminar(idTarea) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Estas Seguro',
            text: "se borraria permanentemente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eleminar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                let listaAy = [...IndiceTareas]
                for (let ieleminar = 0; ieleminar < listaAy.length; ieleminar++) {
                    const element = listaAy[ieleminar];
                    if (element.id === idTarea) {
                        if (element.rayitaNike === true) {
                            var newContador = contador;
                            newContador--;
                            setcontador(newContador)
                        }
                        listaAy.splice(ieleminar, 1)
                        break;
                    }
                }
                setIndiceTareas(listaAy)
                actualizarTareasUsuarios(listaAy)
                swalWithBootstrapButtons.fire(
                    'Tarea borrada!',
                    'Tu tarea se borro.',
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelada',
                    'Seguira tu tarea con vida',
                    'success'
                )
            }
        })
    }

    function contadorchecks(id) {
        let listaAy = [...IndiceTareas];
        let contadorcheck = 0;
        for (let icount = 0; icount < listaAy.length; icount++) {
            if (listaAy[icount].id === id) {
                listaAy[icount].rayitaNike = !listaAy[icount].rayitaNike;
            }
            if (listaAy[icount].rayitaNike === true) {
                contadorcheck++;
            }
        }
        setIndiceTareas(listaAy)
        setcontador(contadorcheck)
        actualizarTareasUsuarios(listaAy)
    }

    function contadorChecksLocal(listaNueva) {
        let contadorcheck = 0;
        for (let icount = 0; icount < listaNueva.length; icount++) {
            if (listaNueva[icount].rayitaNike === true) {
                contadorcheck++;
            }
        }
        setcontador(contadorcheck);
    }




    function Validaciones(texto) {
        let listaAy = [...IndiceTareas];
        for (let itareas = 0; itareas < listaAy.length; itareas++) {
            if (listaAy[itareas].texto.toLowerCase() === texto.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function detectarTecla(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            ponerTareas(event)
        }
    }

    // -----------------waaaaaaaaaa-----------

    return (
        <div className='container'>
            <Titulo ></Titulo>
            <Boton onChange={inputChange} ponerTareas={ponerTareas} onKeyDown={detectarTecla}></Boton>
            <br />
            <Buscador></Buscador>
            <div className="contador">
                <TareasC></TareasC>
                <span className="numeritos">{contador}</span>
            </div>
            <span></span>
            <div className="TareasDiv">
                {IndiceTareas.length > 0 ?
                    (IndiceTareas.map((tarea, indice) => (
                        <Tareas
                            check={tarea.rayitaNike}
                            texto={tarea.texto}
                            key={indice}
                            borrar={Eliminar}
                            id={tarea.id}
                            marcarTarea={contadorchecks}
                        ></Tareas>
                    ))) : (<NoHayTarea></NoHayTarea>)}
            </div>
        </div>
    )
}

export default Todooapp