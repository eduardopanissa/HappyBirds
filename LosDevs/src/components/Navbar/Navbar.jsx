
import styles from './Navbar.module.css'

import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to='/'>
                    happy<span className={styles.spanLogo}>B</span>irds
                </NavLink>
            </div>
            <ul className={styles.navList}>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login'>
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/register'>
                        Cadastrar
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar