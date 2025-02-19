
import styles from './Card.module.css'

const Card = ({ img, bird_name, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={img} alt={bird_name} className={styles.imgClass} />
            <h3>
                {bird_name}
            </h3>
        </div>
    )

}

export default Card