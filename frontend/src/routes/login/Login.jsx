
import styles from './Login.module.css'

import { useState } from "react"

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //detro de um try/catch aqui
        const login = {
            name,
            password
        }

        //validacao aqui

        //envio aqui

        console.log(login)
    }

    return (
        <div className={styles.divContainer}>

            <form onSubmit={handleSubmit} className={styles.formContainer}>

                <h1>
                    Entrar
                </h1>

                <p className={styles.pCenter}>
                    Faça o login para ter acesso.
                </p>

                <label>
                    <p>Login:</p>
                    <input type='text' name='name' placeholder='Nome, Nome de usuário' required onChange={(e) => setName(e.target.value)} value={name} />
                </label>

                <label>
                    <p>Senha:</p>
                    <input type='password' name='password' placeholder='Digite sua senha' required onChange={(e) => setPassword(e.target.value)} value={password} />
                </label>

                <button type='submit'>
                    Entrar
                </button>

            </form>

        </div>
    )
}

export default Login