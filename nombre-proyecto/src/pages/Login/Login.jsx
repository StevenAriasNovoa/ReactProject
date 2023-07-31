import "./Login.css"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {

    const [loginEmailValor, setloginEmailValor] = useState("")
    const [loginPasswordValor, setloginPasswordValor] = useState("")

    const navigate = useNavigate();

    function iniciarSesion() {

        const usuarios = localStorage.getItem("users");
        let usuariosData = JSON.parse(usuarios) ?? [];

        //comprarar contraseña 
        const indexUsuario = usuariosData.findIndex((usuarios) => {
            return ((usuarios.email === loginEmailValor || usuarios === loginEmailValor) && usuarios.password === loginPasswordValor)

        })
        // si son iguales iniciar sesion
        if (indexUsuario >= 0) {
            const user = usuariosData[indexUsuario]
            navigate("/tareas/:nombre")
        }

    }

    return (
        <div className="form">
            <p id="heading">login</p>
            <div className="field">
                <svg className="input-icon " fill="none" viewBox="0 0 24 24" height="24" width="24"
                    xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff"
                        d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
                    <path stroke-linejoin="round" stroke-width="1.5" stroke="#fff" d="M2.01577 13.4756C2.08114
                    16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 
                    20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 
                    18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 
                    7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607
                    3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382
                    5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                    ></path>
                </svg>
                <input value={loginEmailValor} onChange={(event) => { setloginEmailValor(event.target.value) }} autoComplete="off" placeholder="Gmail" class="input-field " type="text" />
            </div>
            <div className="field">
                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 
                0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input value={loginPasswordValor} onChange={(event) => { setloginPasswordValor(event.target.value) }} autoComplete="off" placeholder="Password" class="input-field" type="password" />
            </div>
            <div className="btn">
                <button onClick={iniciarSesion} className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
        </div>
    )
}

export default Login;