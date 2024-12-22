
import styles from './Register.module.css'

import { useState } from "react"

const Register = () => {
    const [db, setDb] = useState([]);

    const [inName, setInName] = useState('');
    const [inEmail, setInEmail] = useState('');
    const [inCPFNumber, setInCPFNumber] = useState('');
    const [inPassword, setInPassword] = useState('');
    const [inConfirmPass, setInConfirmPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        const user = {
            id: Math.random(),
            inName,
            inEmail,
            inCPFNumber,
            inPassword,
            inConfirmPass
        }
        if (inPassword !== inConfirmPass) return setError('As senhas devem ser iguais!');

        setDb([...db, user]);

        // validacao aqui

        //envio aqui

        console.log(db);
    }

    return (
        <div className={styles.divContainer}>
            <h1>
                Cadastre-se para postar e acessar os conteúdos.
            </h1>
            <p>
                Crie sua conta, e compartilhe com a gente.
            </p>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label>
                    <p>Nome:</p>
                    <input type="text" name="inName" placeholder="Digite seu nome" required value={inName} onChange={(e) => setInName(e.target.value)} />
                </label>
                <label>
                    <p>E-mail:</p>
                    <input type="email" name="inEmail" placeholder="Digite seu email" required value={inEmail} onChange={(e) => setInEmail(e.target.value)} />
                </label>
                <label>
                    <p>CPF:</p>
                    <input type="number" name="inCelNumber" placeholder="Digite seu CPF" required value={inCPFNumber} onChange={(e) => setInCPFNumber(e.target.value)} />
                </label>
                <label>
                    <p>Senha:</p>
                    <input type="password" name="inPassword" placeholder="Digite uma senha" required value={inPassword} onChange={(e) => setInPassword(e.target.value)} />
                </label>
                <label>
                    <p>Confirmar senha:</p>
                    <input type="password" name="inConfirmPass" placeholder="Digite novamente a senha" required value={inConfirmPass} onChange={(e) => setInConfirmPass(e.target.value)} />
                </label>
                <button type='submit'>
                    Cadastrar
                </button>
            </form>

            {error && <p className='error'>{error}</p>}

        </div>
    )
}

export default Register