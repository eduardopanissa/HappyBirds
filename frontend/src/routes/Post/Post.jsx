
import styles from './Post.module.css';

import { Link, useParams } from "react-router-dom"

import { useFetchDoc } from "../../hooks/useFetchDoc";

import { useEffect, useState } from "react";

const Post = () => {

    const { id } = useParams();

    const { data: picture, loading, error } = useFetchDoc(id);

    const [showError, setShowError] = useState(false);

    useEffect(() => {

        if (error) {
            setShowError(true);

            const timeError = setTimeout(() => {
                setShowError(false);

            }, 1000);

            return () => clearTimeout(timeError);

        }

    }, [error])

    return (
        <div className={styles.postContainer}>
            <div className={styles.postHeader}>
                <h1>
                    Informações
                </h1>

                <button>
                    <Link to='/gallery'>
                        Voltar
                    </Link>
                </button>
            </div>

            {
                loading && <p>Carregando...</p>
            }

            {
                showError && <p>{error}</p>
            }

            {
                picture && (
                    <div className={styles.postContent}>
                        <div>
                            <img src={picture.image} alt={picture.bird_name} />

                            <h2>
                                {picture.bird_name}
                            </h2>

                            <p>
                                {picture.description}
                            </p>
                        </div>

                        <div className={styles.postFooter}>
                            <p>
                                Criado por:
                                <Link className={styles.linkUser}>
                                    {picture.bird_name}
                                </Link>
                            </p>

                            <button>
                                <Link to={`/post/editPost/${picture._id}`}>
                                    Editar
                                </Link>
                            </button>

                        </div>
                    </div>
                )
            }

        </div >
    )
}

export default Post