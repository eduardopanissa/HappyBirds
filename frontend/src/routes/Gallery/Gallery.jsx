
import styles from './Gallery.module.css'

import { useEffect, useState } from "react"

import { useFetchDocs } from '../../hooks/useFetchDocs'

import Card from "../../components/Card/Card"
import CardDetails from '../../components/CardDetails/CardDetails'

import { Swiper, SwiperSlide } from 'swiper/react'

const Gallery = () => {

    const [gallery, setGallery] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(null);

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
                            key={item.id}
                            img={item.image}
                            title={item.title}
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