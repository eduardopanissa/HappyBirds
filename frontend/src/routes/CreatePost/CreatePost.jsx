
import { useState, useEffect } from 'react'

import styles from './CreatePost.module.css'

import { usePostDoc } from '../../hooks/usePostDoc';

const CreatePost = () => {

    const postDoc = usePostDoc();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState('');
    const [showError, setShowError] = useState(true);

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setMessage('');

        try {
            const post = {
                id: Math.random(),
                title: title,
                image: image,
                description: description
            }

            //validacao de inputs
            //verificacao de duplicacao de postagem

            await postDoc(post)

            setMessage('Postagem feita com sucesso!');

            setTitle('');
            setImage('');
            setDescription('');

        } catch (error) {
            setError('Erro ao fazer postagem.', error);
        }

    }

    useEffect(() => {
        if (message) {
            const timeMessage = setTimeout(() => {
                setShowMessage(false);
            }, 2000);

            return () => clearTimeout(timeMessage);
        }

        if (error) {
            const timeError = setTimeout(() => {
                setShowError(false);
            }, 2000);

            return () => clearTimeout(timeError);
        }

    }, [message, error])

    return (
        <div className={styles.divContainer}>
            <h1>
                Adicionar Foto/espécie
            </h1>

            {showError && <p className={styles.error}>{error}</p>}

            {showMessage && <p>{message}</p>}

            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label>
                    <p>
                        Nome da espécie:
                    </p>
                    <input type='text' name='title' placeholder='Bem-te-vi, Beija Flor' value={title} onChange={(e) => setTitle(e.target.value)} required />
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

                <button>
                    Criar Registro
                </button>
            </form>
        </div>
    )
}

export default CreatePost