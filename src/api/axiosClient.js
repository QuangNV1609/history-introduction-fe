import axios from "axios";
import { parse, stringify } from 'qs'

export const host = 'https://ec1f-2001-ee0-41a1-9fb8-8f2-ad65-bb4-2901.ngrok-free.app'

const axiosClient = axios.create({
    baseURL: host + '/api',
    headers: {
        "content-type": "application/json"
    },
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
    },
})

axiosClient.interceptors.request.use(async (config) => {
    const jwt = window.localStorage.getItem('jwtToken');

    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }

    return config;
})

export default axiosClient;