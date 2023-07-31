import { useState } from "react"
import "./Inicio.css"
import { useNavigate } from "react-router-dom";

function CrearCuenta() {

    const [inputNameValor, setInputNameValor] = useState("");
    const [inputGmailValor, setInputGmailValor] = useState("");
    const [inputPasswordValor, setInputPasswordValor] = useState("");

    // literal navegar en las paginas
    const navigate = useNavigate();

    function Login() {
        // get local
        const usuarios = localStorage.getItem("users");
        let usuariosData = JSON.parse(usuarios) ?? [];
        //pasaran a objetos los imprime como { name:"", gmail:"", pasword:"" }
        const indexUsuario = usuariosData.findIndex((usuarios) =>
         { return usuarios.gmail === inputGmailValor }) //no repetir gmail
        // busca  el indice de un objeto que cumpla una condicion, retorna, si no lo encuentra lo retorna con un -1 

        if (indexUsuario >= 0) {
            alert("Informacion invalido")
            return;
        }
        if (inputNameValor.trim() === "" || inputGmailValor.trim() === "" || inputPasswordValor.trim() === "") {
        alert("Informacion vacia")
        }

        const newUsuario = {
            name: inputNameValor,
            gmail: inputGmailValor,
            password: inputPasswordValor
        }

        usuariosData.push(newUsuario);
        localStorage.setItem("users", JSON.stringify(usuariosData));
        alert("Estas registrado")

    navigate("./login")

    }

    return (
        <div>
            <div className="form">
                <p id="heading">Crear cuenta</p>
                <div className="field">
                    <svg className="input-icon " xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35
                0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 
                0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926
                0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 
                4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 
                0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-
                .964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906
                2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 
                1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 
                1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895
                0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input value={inputNameValor} onChange={(event) => { setInputNameValor(event.target.value) }} autoComplete="off" placeholder="Name" class="input-field" type="text" />
                </div>
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
                    <input value={inputGmailValor} onChange={(event) => { setInputGmailValor(event.target.value) }} autoComplete="off" placeholder="Gmail" class="input-field " type="text" />
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 
                        0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input value={inputPasswordValor} onChange={(event) => { setInputPasswordValor(event.target.value) }} autoComplete="off" placeholder="Password" class="input-field" type="password" />
                </div>
                <div className="btn">
                    <button onClick={Login} className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="button2">Sign Up</button>
                </div>
                <button className="button3">Forgot Password</button>
            </div>
        </div>
    )
}

export default CrearCuenta