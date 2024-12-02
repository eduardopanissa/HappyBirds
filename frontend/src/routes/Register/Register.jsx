
import styles from './Register.module.css'

import { useState } from "react"

const Register = () => {
    const [db, setDb] = useState([]);

    const [inName, setInName] = useState('');
    const [inEmail, setInEmail] = useState('');
    const [inCelNumber, setInCelNumber] = useState('');
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
            inCelNumber,
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
                    <p>Celular:</p>
                    <input type="number" name="inCelNumber" placeholder="Digite seu celular" required value={inCelNumber} onChange={(e) => setInCelNumber(e.target.value)} />
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

            {/* {
                db.map((item) => (
                    <ul key={item.id}>
                        <li>
                            Nome: {item.inName}
                        </li>
                        <li>
                            E-mail: {item.inEmail}
                        </li>
                        <li>
                            Cel: {item.inCelNumber}
                        </li>
                        <li>
                            Password: {item.inPassword}
                        </li>
                        <li>
                            Confirm Password: {item.inConfirmPass}
                        </li>
                    </ul>

                ))
            } */}
        </div>
    )
}

export default Register