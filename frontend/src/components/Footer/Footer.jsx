
import styles from './Footer.module.css'

import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.logo}>
                <NavLink to='/'>
                    happy<span className={styles.spanLogo}>B</span>irds
                </NavLink>
            </div>
            <p>
                O maior banco de fotos sobre espécies de pássaros do mundo todo. Venha viver essa liberdade.
            </p>
        </footer>
    )
}

export default Footer