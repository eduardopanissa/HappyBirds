
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:3000/api',
    headers: {
        "Content-Type": "application/json"
    },
})

//aqui vai atuhorization
// api.interceptors.request.use((request) => {
//     console.log('sucesso request', request);

//     return config;
// }, (error) => {
//     console.log('error no request', error)
// })


api.interceptors.response.use((response) => {
    console.log('sucesso response', response)

    return response;
}, (error) => {
    console.log('erro no reponse', error);

    return Promise.reject(error);
})

export default api