
import { useEffect, useState } from "react";

import api from "../services/api";

export function useFetchDocs() {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    //memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        const fetchDocs = async () => {

            if (cancelled) return;

            setLoading(true);
            setError(null);

            try {
                const response = await api.get('/api/pictures');

                const data = response.data;

                setData(data);

            } catch (error) {
                setError(error.message || 'Erro ao acessar todos os dados');

            } finally {
                setLoading(false);

            }

        }

        fetchDocs();

    }, [cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { data, loading, error };
}
