
import { useState } from 'react';

import api from "../services/api";

export function useUpdateDoc() {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [message, setMessage] = useState('');

    const updateDoc = async (id, payload) => {

        if (!payload || !id) {
            setError('Id ou PAYLOAD inválidos.');

            return;
        };

        try {
            setLoading(true);
            setError(null);
            setMessage('')

            const response = await api.put(`/api/pictures/${id}`, payload);

            if (response.status === 200) {
                setMessage('Atualizado com sucesso!');

            } else {
                setError(response.message || 'Erro ao atualizar postagem.');

            }

        } catch (error) {
            setError(error.message || 'Error ao atualizar postagem.');

        } finally {
            setLoading(false);

        }
    }

    return { loading, error, message, updateDoc };

}