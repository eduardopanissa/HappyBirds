
import styles from './CardDetails.module.css'

import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate();

    return (
        <div className={`${styles.divModal} ${isClosing ? styles.fadeOut : ''}`}>
            <div className={styles.divContainer}>
                <div className={styles.divHeadModal}>
                    <h1>
                        Informações
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

                                        <h2>
                                            {bird_name}
                                        </h2>

                                        <h3 className={styles.cardDetailH3}>
                                            Descrição
                                        </h3>

                                        <p className={styles.pImgDesc}>
                                            {description}
                                        </p>

                                        <button className={styles.buttonRead} onClick={() => navigate(`/post/${_id}`)}>
                                            Ler
                                        </button>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </div >
    )
}

export default CardDetails