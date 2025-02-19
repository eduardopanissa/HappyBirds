
import styles from './Gallery.module.css'

import { useEffect, useState } from "react"

import { useFetchDocs } from '../../hooks/useFetchDocs'

import Card from "../../components/Card/Card"

import CardDetails from '../../components/CardDetails/CardDetails'


const Gallery = () => {

    const { data: gallery, loading, error } = useFetchDocs();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(null);

    if (loading) return <p>Carregando...</p>;

    if (error) return <p>Erro:{error}</p>;

    const handleClickModal = (index) => {
        setIsModalOpen(true);
        setSelectedIndex(index);
    }

    return (
        <div className={styles.containerGalery}>
            <h1>
                Galeria
            </h1>
            <p>
                Aqui vai o campo de busca!
            </p>
            <p>
                Confira todas as espécies disponíveis
            </p>

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