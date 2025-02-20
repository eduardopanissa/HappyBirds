
import styles from './Home.module.css'
import bgHome from '../../assets/bgHome2.jpg';

import { Link } from "react-router-dom"

import { useFetchDocs } from '../../hooks/useFetchDocs';

import Card from '../../components/Card/Card';

const Home = () => {

    const { data: images, loading, error } = useFetchDocs();

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

                <div className={styles.divWelcomeLeft}>
                    <h1>
                        Bem-vindos ao happyBirds!
                    </h1>
                    <h2>
                        O maior banco de fotos sobre espécies de pássaros do mundo.<br /> Venha viver essa liberdade.
                    </h2>
                </div>

                <div className={styles.divWelcomeRight}>
                    <p>
                        Nossa comunidade oferece um banco de dados dedicado para armazenar e gerenciar suas fotos e registros de observação de aves. Aqui, você também pode se conectar com outros observadores, promovendo a troca de conhecimentos e fortalecendo a paixão pela observação de aves no Brasil e ao redor do mundo.
                    </p>
                    <p>
                        Você pode nos conhecer melhor<Link to='/about'>AQUI</Link>.
                    </p>
                </div>

            </div>

            <div className={styles.divWrapperGallery}>
                <div className={styles.divGallery}>
                    <h1>
                        Confira as postagens mais recentes!
                    </h1>
                    {
                        loading && <p>Carregando...</p>
                    }
                    {
                        error && <p>{error.message}</p>
                    }
                    {
                        images && images.map((item) => (
                            <Card
                                key={item._id}
                                img={item.image}
                                bird_name={item.bird_name} />
                        ))
                    }
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
                <Link to='/post/createPost'>
                    Link Criar Post
                </Link>
            </button>
        </div>
    )
}

export default Home