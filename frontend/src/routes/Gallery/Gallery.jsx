
import styles from './Gallery.module.css'

import { useEffect, useState } from "react"

import { useFetchDocs } from '../../hooks/useFetchDocs'

import Card from "../../components/Card/Card"

import CardDetails from '../../components/CardDetails/CardDetails'

import Search from '../../components/Search/Search'


const Gallery = () => {

    const { data: gallery, loading, error } = useFetchDocs();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(null);

    const [showError, setShowError] = useState(false);

    const handleClickModal = (index) => {
        setIsModalOpen(true);
        setSelectedIndex(index);
    }

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
        <div className={styles.containerGalery}>
            <h1>
                Galeria
            </h1>

            <Search />

            {
                loading && <p>Carregando...</p>
            }

            {
                showError && <p>{error}</p>
            }

            <h2>
                Confira todas as espécies disponíveis
            </h2>

            {
                gallery && gallery.length === 0 ? (
                    <div>
                        <p>
                            Sem posts na galeria...
                        </p>
                        <button>
                            <Link to='/post/createPost'>
                                Criar primeiro post
                            </Link>
                        </button>
                    </div>
                ) : (
                    <div className={styles.containerCards}>
                        {
                            gallery && gallery.map((item, index) => (
                                <Card
                                    key={item._id}
                                    img={item.image}
                                    bird_name={item.bird_name}
                                    onClick={() => handleClickModal(index)}
                                />
                            ))

                        }
                    </div>
                )
            }

            {
                isModalOpen && (
                    <CardDetails
                        onClose={() => setIsModalOpen(false)}
                        gallery={gallery}
                        index={selectedIndex}
                    />
                )
            }

        </div>
    )
}

export default Gallery