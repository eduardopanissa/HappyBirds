
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

import styles from './CreatePost.module.css'

import { usePostDoc } from '../../hooks/usePostDoc';

const CreatePost = () => {

    const [payload, setPayload] = useState(null);

    const [bird_name, setBird_Name] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const [showError, setShowError] = useState(true);

    const [showMessage, setShowMessage] = useState(true);

    const { loading, error, message } = usePostDoc(payload);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = {
            "bird_name": bird_name,
            "description": description,
            "image": image
        }

        setPayload(post);

        //validacao de inputs
        //verificacao de duplicacao de postagem

        setBird_Name('');
        setImage('');
        setDescription('');

    }

    useEffect(() => {
        if (message) {
            const timeMessage = setTimeout(() => {
                setShowMessage(false);

                navigate('/gallery');

            }, 1000);

            return () => clearTimeout(timeMessage);
        }

        if (error) {
            const timeError = setTimeout(() => {
                setShowError(false);

            }, 1000);

            return () => clearTimeout(timeError);
        }

    }, [message, error])

    return (
        <div className={styles.divContainer}>

            {loading && <p>Carregando...</p>}

            {showError && <p className={styles.error}>{error}</p>}

            {showMessage && <p>{message}</p>}

            <form onSubmit={handleSubmit} className={styles.formContainer}>

                <h1>
                    Adicionar Foto/espécie
                </h1>

                <label>
                    <p>
                        Nome da espécie:
                    </p>
                    <input type='text' name='bird_name' placeholder='Bem-te-vi, Beija Flor' value={bird_name} onChange={(e) => setBird_Name(e.target.value)} required />
                </label>

                <label>
                    <p>
                        URL da imagem/Upload imagem
                    </p>
                    <input type='text' name='image' placeholder='Coloque a URL ' value={image} onChange={(e) => setImage(e.target.value)} required />
                </label>

                <label>
                    <p>
                        Descrição:
                    </p>
                    <textarea name="description" id="description" placeholder="Foto tirada no parque Nacional Bem-te-vi em Arceburgo - MG" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </label>

                <button type='submit' >
                    Criar Registro
                </button>
            </form>
        </div>
    )
}

export default CreatePost