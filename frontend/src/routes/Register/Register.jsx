
import styles from './Register.module.css'

import { useCreateUser } from '../../hooks/useCreateUser';

import { useState } from "react"

const Register = () => {

    const { createUser } = useCreateUser();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setMessage('');

        try {
            const user = {
                id: Math.random(),
                name: name,
                username: username,
                password: password,
            }

            // validacao aqui
            //verificacao se ha usuacrio ja cadastrado
            //verificacao de inputs de dados

            await createUser(user);

            setMessage('Usuário criado com sucesso')

            setName('');
            setUsername('');
            setPassword('');

        } catch (error) {
            setError('erro ao criar usuário', error)
        }

    }

    return (
        <div className={styles.divContainer}>

            {error && <p className='error'>{error}</p>}

            {message && <p className='message'>{message}</p>}

            <form onSubmit={handleSubmit} method='post' className={styles.formContainer}>

                <h1>
                    Cadastre-se
                </h1>

                <p className={styles.pCenter}>
                    Crie sua conta, e compartilhe com a gente.
                </p>

                <label>
                    <p>Nome:</p>
                    <input type="text" id='name' name="name" placeholder="Digite seu nome" required value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    <p>Escolha um nome de usuário:</p>
                    <input type="text" id='username' name="username" placeholder="Digite um nome de usuário" required value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>

                <label>
                    <p>Senha:</p>
                    <input type="password" id='password' name="password" placeholder="Digite uma senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <button type='submit'>
                    Cadastrar
                </button>

            </form>

        </div>
    )
}

export default Register