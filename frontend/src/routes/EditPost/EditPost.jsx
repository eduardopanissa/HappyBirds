
import { useFetchDoc } from "../../hooks/useFetchDoc"

import { useDeleteDoc } from "../../hooks/useDeleteDoc"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

const EditPost = () => {

    const { id } = useParams();

    const { data: picture, error, loading } = useFetchDoc(id);

    const { loading: deleteLoading, error: deleteError, message: deleteMessage, deleteDoc } = useDeleteDoc();

    const [showMessage, setShowMessage] = useState(true);

    const [showError, setShowError] = useState(true);

    const [showErrorGet, setShowErrorGet] = useState(true);

    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm('Deseja deletar esse item?')) {
            await deleteDoc(id);

            // if (!deleteError) return;
        }

    }

    useEffect(() => {

        if (error) {
            const timeError = setTimeout(() => {
                setShowErrorGet(false);

            }, 2000);

            return () => clearTimeout(timeError);
        }

        if (deleteMessage) {
            const timeMessage = setTimeout(() => {
                setShowMessage(false);

                navigate('/gallery')

            }, 2000);

            return () => clearTimeout(timeMessage);
        }

        if (deleteError) {
            const timeError = setTimeout(() => {
                setShowError(false);

            }, 2000);

            return () => clearTimeout(timeError);
        }
    }, [error, deleteMessage, deleteError]);

    return (
        <div>
            <h1>
                Edit Post
            </h1>
            {
                (loading || deleteLoading) && <p>Carregando...</p>
            }
            {
                showErrorGet && <p>{error}</p>
            }
            {
                showMessage && <p>{deleteMessage}</p>
            }
            {
                showError && <p>{deleteError}</p>
            }
            {
                picture && (
                    <>
                        <h2>
                            {picture.bird_name}
                        </h2>
                        <img src={picture.image} alt={picture.bird_name} width='300px' />
                        <p>
                            {picture.description}
                        </p>
                        <button onClick={handleDelete}>
                            Deletar
                        </button>
                    </>

                )
            }
        </div>
    )
}

export default EditPost