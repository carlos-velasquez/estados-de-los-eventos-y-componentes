import React from "react";

const Formulario = (props) => {

 const EscribirUsuario = (e) => {
    props.setUser (e.target.value)
 }

 const EscribirPassword = (e) => {
    props.setPassword (e.target.value) 
 }

    return (
        <form>
            <h1>Desafio estado de los componentes</h1>
            <h4>Nombre</h4>
            <input type="text" onChange={EscribirUsuario} />
            <h3>Contraseña</h3>
            <input type="password" onChange={EscribirPassword} />
        </form>
    )
}

export default Formulario;