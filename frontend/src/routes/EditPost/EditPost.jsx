import styles from './EditPost.module.css'

import { useFetchDoc } from "../../hooks/useFetchDoc"

import { useDeleteDoc } from "../../hooks/useDeleteDoc"

import { useUpdateDoc } from "../../hooks/useUpdateDoc"

import { useParams, useNavigate, Link } from "react-router-dom"

import { useEffect, useState } from "react";

const EditPost = () => {

    const { id } = useParams();

    const { data: picture, error, loading } = useFetchDoc(id);

    const { loading: deleteLoading, error: deleteError, message: deleteMessage, deleteDoc } = useDeleteDoc();

    const { loading: updateLoading, error: updateError, message: updateMessage, updateDoc } = useUpdateDoc();

    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    const [showUpdateMessage, setShowUpdateMessage] = useState(false);

    const [showDeleteError, setShowDeleteError] = useState(false);

    const [showUpdateError, setShowUpdateError] = useState(false);

    const [showErrorGet, setShowErrorGet] = useState(false);

    //setInputs
    const [image, setImage] = useState('');
    const [bird_name, setBird_Name] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!image || !bird_name || !description || !id) return;

        const payload = {
            "bird_name": bird_name,
            "image": image,
            "description": description
        }

        updateDoc(id, payload);

    }

    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm('Deseja deletar esse item?')) {
            await deleteDoc(id);

            return;
        }

    }

    useEffect(() => {
        if (picture) {
            setBird_Name(picture.bird_name);
            setImage(picture.image);
            setDescription(picture.description);

        };

    }, [picture]);

    useEffect(() => {

        if (error) {
            setShowErrorGet(true);

            const timeError = setTimeout(() => {
                setShowErrorGet(false);

            }, 1000);

            return () => clearTimeout(timeError);
        }

        if (deleteMessage) {
            setShowDeleteMessage(true);

            const timeMessage = setTimeout(() => {
                setShowDeleteMessage(false);

                navigate('/gallery');

            }, 1000);

            return () => clearTimeout(timeMessage);
        }

        if (updateMessage) {
            setShowUpdateMessage(true);

            const timeUpdateMessage = setTimeout(() => {
                setShowUpdateMessage(false);

                navigate('/gallery');

            }, 1000);

            return () => clearTimeout(timeUpdateMessage);
        }

        if (updateError) {
            setShowUpdateError(true);

            const timeUpdateError = setTimeout(() => {
                setShowUpdateError(false);

            }, 1000);

            return () => clearTimeout(timeUpdateError);
        }

        if (deleteError) {
            setShowDeleteError(true);

            const timeDeleteError = setTimeout(() => {
                setShowDeleteError(false);

            }, 1000);

            return () => clearTimeout(timeDeleteError);
        }

    }, [error, deleteMessage, deleteError, updateMessage, updateError]);

    return (
        <div>

            {
                (loading || deleteLoading || updateLoading) && <p>Carregando...</p>
            }
            {
                showErrorGet && <p>{error}</p>
            }
            {
                showUpdateError && <p>{updateError}</p>
            }
            {
                showUpdateMessage && <p>{updateMessage}</p>
            }
            {
                showDeleteMessage && <p>{deleteMessage}</p>
            }
            {
                showDeleteError && <p>{deleteError}</p>
            }

            {
                picture && (
                    <div className={styles.editPostContainer}>

                        <div className={styles.editPostHeader}>
                            <h1>
                                Editar Postagem
                            </h1>

                            <button>
                                <Link to={`/post/${picture._id}`}>
                                    Voltar
                                </Link>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.editPostForm}>
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

                            <img src={image} alt={bird_name} width='150px' height='150px' />

                            <label>

                                <p>
                                    Descrição:
                                </p>

                                <textarea name="description" id="description" placeholder="Foto tirada no parque Nacional Bem-te-vi em Arceburgo - MG" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

                            </label>

                            <div className={styles.editPostFooter}>
                                <button type='submit'>
                                    Atualizar
                                </button>

                                <button onClick={handleDelete}>
                                    Deletar
                                </button>
                            </div>
                        </form>

                    </div>

                )
            }
        </div>
    )
}

export default EditPost