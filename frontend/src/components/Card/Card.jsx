
import styles from './Card.module.css'

const Card = ({ img, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt={title} className={styles.imgClass} />
            <h3>
                {title}
            </h3>
            {/* <p>
                {description}
            </p> */}
        </div>
    )
}

export default Card