
import { useState } from 'react';
import styles from './CardDetails.module.css'

import { RiCloseLargeLine } from "react-icons/ri";

const CardDetails = ({ title, image, description, onClose }) => {

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
                        {title}
                    </h1>
                    <button onClick={handleClickClose}>
                        <RiCloseLargeLine />
                    </button>
                </div>
                <div className={styles.divImgDesc}>
                    <img src={image} alt={title} className={styles.imgModal} />
                    <h3 className={styles.cardDetailH3}>
                        Descrição
                    </h3>
                    <p>
                        {description}
                    </p>

                    <a href="#">Criado por: {title}</a>
                </div>
            </div>
        </div>
    )
}

export default CardDetails