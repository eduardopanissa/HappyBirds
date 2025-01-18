
import api from "../services/api";

export const useFetchDoc = () => {
    const fetchDoc = async (id) => {
        try {
            const response = await api.get(`/api/pictures/:${id}`);

            const data = response.data;

            return data;
        } catch (error) {
            console.log('erro ao pegar todos os dados', error)
        }
    }
    return fetchDoc;
}