
import api from "../services/api";

export const useFetchDocs = () => {
    const fetchDocs = async () => {
        try {
            const response = await api.get('/api/pictures');

            const data = response.data;

            return data;
        } catch (error) {
            console.log('erro ao pegar todos os dados', error)
        }
    }
    return fetchDocs;
}