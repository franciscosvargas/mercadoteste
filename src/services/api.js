import axios from 'axios';

import { store } from '../store/index';

const api = axios.create({
    /* baseURL: 'https://ditudo-backend.herokuapp.com', */
    baseURL: 'https://api.mercadoteste.loja.website',
})

api.interceptors.request.use(async function (config) {
    const state = store.getState()

	if (state.login.token) {
		config.headers.Authorization = 'Bearer '+state.login.token;
	}
   
    return config;
})


export default api;