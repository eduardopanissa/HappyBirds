
import { useEffect, useState } from 'react';

import api from '../services/api';

export function usePostDoc(payload) {

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState('');

    useEffect(() => {

        if (!payload) return;

        const postDoc = async () => {

            setLoading(true);
            setError(null);
            setMessage('');

            try {
                const response = await api.post('/api/pictures', payload);

                if (response.status === 201) {
                    setMessage('Postagem feita com sucesso!');
                } else {
                    setError(response.message || 'Erro ao postar...')
                }

            } catch (error) {
                setError(error.message || 'Erro ao postar...');

            } finally {
                setLoading(false);
            }

        };

        postDoc();

    }, [payload]);

    return { loading, error, message };
}
