
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css'

import { FaBars } from "react-icons/fa6";

import { NavLink } from "react-router-dom"

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(prev => !prev);
    }

    const handleCloseMenu = () => {
        setToggleMenu(false);
    }

    const handleResize = () => {
        if (window.innerWidth >= 750 && toggleMenu) {
            setToggleMenu(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [toggleMenu]);


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to='/' onClick={handleCloseMenu}>
                    happy<span className={styles.spanLogo}>B</span>irds
                </NavLink>

                <button className={styles.buttonToggle} onClick={handleToggleMenu}>
                    <FaBars />
                </button>

            </div>

            <ul className={`${styles.navList} ${toggleMenu ? styles.navListToggle : ''}`} >
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')} onClick={handleCloseMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/gallery' className={({ isActive }) => (isActive ? styles.active : '')} onClick={handleCloseMenu}>
                        Galeria
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')} onClick={handleCloseMenu}>
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : '')} onClick={handleCloseMenu}>
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : '')} onClick={handleCloseMenu}>
                        Cadastrar
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar