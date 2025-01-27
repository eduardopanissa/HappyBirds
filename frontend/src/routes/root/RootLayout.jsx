
import styles from './RootLayout.module.css'

import { Outlet, useLocation } from "react-router-dom"

import { useEffect } from 'react'

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const RootLayout = () => {

    const { pathname } = useLocation();

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }, [pathname])

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout