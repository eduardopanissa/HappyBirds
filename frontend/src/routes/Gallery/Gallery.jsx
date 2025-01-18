
import styles from './Gallery.module.css'

import { useEffect, useState } from "react"

import { useFetchDocs } from '../../hooks/useFetchDocs'

import Card from "../../components/Card/Card"

const Gallery = () => {

    const [gallery, setGallery] = useState([])

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
                            description={item.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery