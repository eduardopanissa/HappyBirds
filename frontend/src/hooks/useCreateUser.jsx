
import api from "../services/api";

export const useCreateUser = () => {
    const createUser = async (payload) => {
        try {
            const response = await api.post('/api/users', payload);

            const data = response.data.user;

            return data;

        } catch (error) {
            console.log('erro ao cadastrar usuário.');
        }

    }

    return createUser;
}