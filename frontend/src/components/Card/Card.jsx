
import styles from './Card.module.css'

const Card = ({ img, title, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={img} alt={title} className={styles.imgClass} />
            <h3>
                {title}
            </h3>
        </div>
    )
}

export default Card