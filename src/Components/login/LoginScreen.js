import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () =>{
        // Redireccionar la pagina y se puede devolver
        // history.push("/")//
        // Redirecciona la pagina pero no se puede devolver
        history.replace("/")
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                login
            </button>
        </div>
    )
}
