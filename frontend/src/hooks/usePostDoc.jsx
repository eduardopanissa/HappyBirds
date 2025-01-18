
import api from '../services/api';

export const usePostDoc = () => {
    const postDoc = async (payload) => {
        try {
            const response = await api.post('/api/pictures', payload);

            const data = response.data;
            console.log('data post', data)
            return data;
        } catch (error) {
            console.log('erro ao postar dados', error)
        }
    }
    return postDoc;
}