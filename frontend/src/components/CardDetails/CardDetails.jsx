
import styles from './CardDetails.module.css'

import { RiCloseLargeLine } from "react-icons/ri";

const CardDetails = ({ title, image, description, onClose }) => {
    console.log(title, description)
    return (
        <div className={styles.divModal}>
            <div className={styles.divContainer}>
                <div className={styles.divHeadModal}>
                    <h1>
                        {title}
                    </h1>
                    <button onClick={onClose}>
                        <RiCloseLargeLine />
                    </button>
                </div>
                <div className={styles.divImgDesc}>
                    <img src={image} alt={title} className={styles.imgModal} />
                    <h3>
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