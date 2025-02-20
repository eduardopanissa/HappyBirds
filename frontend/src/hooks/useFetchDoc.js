
import api from "../services/api";

import { useEffect, useState } from "react";

export function useFetchDoc(id) {

    //memory leak
    const [cancelled, setCancelled] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDoc = async () => {

            // if (cancelled) return;

            if (!id) return;

            setLoading(true);
            setError(null);

            try {
                const response = await api.get(`/api/pictures/${id}`);

                const data = response.data;

                setData(data);

            } catch (error) {
                setError(error.message || 'Erro a buscar dados.')
            } finally {
                setLoading(false);

            }

        }

        fetchDoc();

    }, [cancelled, id]);

    useEffect(() => {
        return () => setCancelled(true);

    }, [])

    return { data, loading, error };

}