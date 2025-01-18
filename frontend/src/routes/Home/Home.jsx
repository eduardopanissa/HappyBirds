
import styles from './Home.module.css'

import { Link } from "react-router-dom"

import bgHome from '../../assets/bgHome2.jpg';

const Home = () => {


    return (
        <div className={styles.container}>
            <div className={styles.divImg}>
                <img src={bgHome} alt='bgHome' />
                <div className={styles.overlay}>
                    <p>
                        Bem vindos ao happyBirds,<br /> compartilhe seus registros e experiências sobre<br /> observação de aves.
                    </p>
                </div>
            </div>

            <section>
                <h1>
                    Aqui vai uma section com bem vindo, breve descricao de como funciona nossa comunidade. temos a aba sobre onde podemos explorar
                </h1>
            </section>

            <section>
                <h1>
                    Aqui vai uma section com cards de todos os posts scroll infinito, ou somente uma previa, e deixar a aba galeria.
                </h1>
            </section>
            <button>
                <Link to='/createPost'>
                    Link Criar Post
                </Link>
            </button>
        </div>
    )
}

export default Home