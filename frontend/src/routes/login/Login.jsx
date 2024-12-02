
import styles from './Login.module.css'

import { useState } from "react"

const Login = () => {
    const [inLogin, setInLogin] = useState('');
    const [inPassword, setInPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const login = [{
            inLogin,
            inPassword
        }]

        //validacao aqui

        //envio aqui

        console.log(login)
    }

    return (
        <div className={styles.divContainer}>
            <h1>
                Entrar
            </h1>
            <p>
                Faça o login para ter acesso.
            </p>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label>
                    <p>Login:</p>
                    <input type='text' id='inLogin' placeholder='Email, Celular, Nome de usuário' required onChange={(e) => setInLogin(e.target.value)} value={inLogin} />
                </label>
                <label>
                    <p>Senha:</p>
                    <input type='password' id='inPassword' placeholder='Digite sua senha' required onChange={(e) => setInPassword(e.target.value)} value={inPassword} />
                </label>
                <button type='submit'>
                    Entrar
                </button>

            </form>
        </div>
    )
}

export default Login