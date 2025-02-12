
import styles from './CardDetails.module.css'

import { useState } from 'react';

import { NavLink } from 'react-router-dom'

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
                            const { id, title, image, description } = item;

                            return (
                                <SwiperSlide key={id}>
                                    <div className={styles.divImgDesc}>
                                        <img src={image} alt={title} className={styles.imgModal} />

                                        <h3 className={styles.cardDetailH3}>
                                            Informações
                                        </h3>

                                        <p className={styles.pImgDesc}>
                                            {description}
                                        </p>

                                        <NavLink href="#" target='blank'>Criado por: {title}</NavLink>

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