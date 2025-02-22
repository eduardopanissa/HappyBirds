
import styles from './CardDetails.module.css'

import { useState } from 'react';

import { Link } from 'react-router-dom'

import { RiCloseLargeLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper/modules'

const CardDetails = ({ onClose, gallery, index }) => {

    const [isClosing, setIsClosing] = useState(false);

    const handleClickClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            onClose();
        }, 300)

    }

    return (
        <div className={`${styles.divModal} ${isClosing ? styles.fadeOut : ''}`}>
            <div className={styles.divContainer}>
                <div className={styles.divHeadModal}>
                    <h1>
                        Descrição
                    </h1>
                    <button onClick={handleClickClose}>
                        <RiCloseLargeLine />
                    </button>
                </div>

                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    initialSlide={index}
                >
                    {
                        gallery.map((item) => {
                            const { _id, bird_name, image, description } = item;

                            return (
                                <SwiperSlide key={_id}>
                                    <div className={styles.divImgDesc}>
                                        <img src={image} alt={bird_name} className={styles.imgModal} />

                                        <h3 className={styles.cardDetailH3}>
                                            Informações
                                        </h3>

                                        <p className={styles.pImgDesc}>
                                            {description}
                                        </p>

                                        <div>
                                            <Link to="#" target='blank'>Criado por: {bird_name}</Link>

                                            <Link to={`/post/editPost/${_id}`}>Editar</Link>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default CardDetails