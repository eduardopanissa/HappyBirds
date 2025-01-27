
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
                        Bem-vindos ao happyBirds,<br /> compartilhe seus registros e experiências sobre<br /> observação de aves.
                    </p>
                </div>
            </div>

            <div className={styles.divWelcome}>

                <div>
                    <h3>
                        Bem-vindos ao happyBirds!
                    </h3>
                    <p>
                        O maior banco de fotos sobre espécies de pássaros do mundo.<br /> Venha viver essa liberdade.
                    </p>
                </div>

                <div>
                    <p>
                        Nossa comunidade oferece um banco de dados dedicado para armazenar e gerenciar suas fotos e registros de observação de aves. Aqui, você também pode se conectar com outros observadores, promovendo a troca de conhecimentos e fortalecendo a paixão pela observação de aves no Brasil e ao redor do mundo.
                    </p>
                    <p>
                        Você pode nos conhecer melhor <Link to='/about'>AQUI</Link>.
                    </p>
                </div>

            </div>



            <div className={styles.divWrapperGallery}>
                <div className={styles.divGallery}>
                    <h1>
                        Aqui vai uma section com cards de todos os posts scroll infinito, ou somente uma previa, e deixar a aba galeria.
                    </h1>
                </div>
            </div>



            <div className={styles.divLocal}>
                <h1>
                    Áreas de observação
                </h1>
                <form>
                    <label>
                        <p>
                            Estado:
                        </p>
                        <input type='text' placeholder='Procure por um estado' />
                    </label>

                    <label>
                        <p>
                            Município/Cidade:
                        </p>
                        <input type='text' placeholder='Procure por um município' />
                    </label>
                </form>
            </div>

            <div className={styles.divWrapperDinamyc}>
                <div className={styles.divDinamyc}>
                    <h1>
                        div dinamica, inicialmente com posts mais recentes, e depois é exibido o resultado da procura de áreas de observação.
                    </h1>
                </div>
            </div>

            <button>
                <Link to='/createPost'>
                    Link Criar Post
                </Link>
            </button>
        </div>
    )
}

export default Home