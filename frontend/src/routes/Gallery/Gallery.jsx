
import styles from './Gallery.module.css'

import { useEffect, useState } from "react"

import { useFetchDocs } from '../../hooks/useFetchDocs'

import Card from "../../components/Card/Card"
import CardDetails from '../../components/CardDetails/CardDetails'

const Gallery = () => {

    const [gallery, setGallery] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedCard, setSelectedCard] = useState(null);


    useEffect(() => {
        getAssets()
    }, [])

    const getAssets = async () => {
        try {
            const fetchDocs = useFetchDocs();
            const data = await fetchDocs();
            setGallery(data)
        } catch (error) {
            console.log('erro ao buscar assets', error)
        }
    }

    const handleClickModal = (item) => {
        setIsModalOpen(true);
        setSelectedCard(item);
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
                    gallery && gallery.map((item) => (
                        <Card
                            key={item.id}
                            img={item.image}
                            title={item.title}
                            onClick={() => handleClickModal(item)}
                        />
                    ))
                }
            </div>
            {
                isModalOpen && selectedCard && (
                    <CardDetails
                        title={selectedCard.title}
                        image={selectedCard.image}
                        description={selectedCard.description}
                        onClose={() => setIsModalOpen(false)}
                    />
                )
            }
        </div>
    )
}

export default Gallery