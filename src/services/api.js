import axios from 'axios';

const api = axios.create({
    /* baseURL: 'https://ditudo-backend.herokuapp.com', */
    baseURL: 'http://35.222.146.62:3001',
})

export default api;