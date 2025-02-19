
import api from "../services/api";

import { useEffect, useState } from "react";

export function useDeleteDoc(id) {

    //memory leak
    const [cancelled, setCancelled] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [message, setMessage] = useState('');

    useEffect(() => {
        const deleteDoc = async () => {
            if (cancelled) return setError('Cancelado.');

            if (!id) return setError('Sem identificação.');

            setLoading(true);
            setError(null);
            setMessage('');

            try {
                await api.delete(`/api/pictures/${id}`);

                setMessage('Apagado com sucesso.');

            } catch (error) {
                setError(error.message || 'Erro ao Deletar');

            } finally {
                setLoading(false);

            }

        }

        deleteDoc();

    }, [cancelled])

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return { loading, error, message }

}