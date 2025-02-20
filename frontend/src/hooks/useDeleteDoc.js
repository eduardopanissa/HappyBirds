
import api from "../services/api";

import { useEffect, useState } from "react";

export function useDeleteDoc() {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [message, setMessage] = useState('');

    const deleteDoc = async (id) => {

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

    return { deleteDoc, loading, error, message }

}