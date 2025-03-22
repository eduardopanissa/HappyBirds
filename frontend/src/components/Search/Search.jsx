import styles from './Search.module.css'

import { useFetchDocs } from "../../hooks/useFetchDocs"

import { Link } from 'react-router-dom'

import { useState, useEffect } from "react";

const Search = () => {

    const [searchByName, setSearchByName] = useState('');

    const [resultSearch, setResultSearch] = useState(null);

    const { data: gallery, error } = useFetchDocs();

    const [showError, setShowError] = useState(false);

    const searchBird = () => {
        if (!searchByName) return setResultSearch(null);

        const resultFilter = gallery.filter((item) => item.bird_name.toLowerCase().includes(searchByName.toLowerCase()));

        setResultSearch(resultFilter);

    }

    useEffect(() => {
        searchBird();

    }, [searchByName]);

    useEffect(() => {
        if (error) {
            setShowError(true);

            const timeError = setTimeout(() => {
                setShowError(false);

            }, 1000);

            return () => clearTimeout(timeError)
        }
    }, [error])

    return (
        <>

            {
                showError && <p>{error}</p>
            }

            <div className={styles.divSearchInput}>

                <input type='text' id='searchByName' name='searchByName' placeholder='Digite um nome para buscar...' value={searchByName} onChange={(e) => setSearchByName(e.target.value)} />

            </div>

            {
                resultSearch && resultSearch.map((item) => {
                    const { bird_name, _id, image } = item;

                    return (
                        <div key={_id} >
                            <img src={image} alt={bird_name} width='20px' height='20px' border-radius='50%' />

                            <Link to={`/post/${_id}`}>
                                {bird_name}
                            </Link>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Search