
import styles from './Gallery.module.css'

import { useEffect, useState } from "react"

import api from "../../services/api"

import Card from "../../components/Card/Card"

const Gallery = () => {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        getHelloApi()
    }, [])

    const getHelloApi = async () => {
        try {
            const response = await api.get('/pictures')

            const data = response.data.tbgalery;

            console.log(data)
            setGallery(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.containerGalery}>
            <h1>
                Galeria
            </h1>
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