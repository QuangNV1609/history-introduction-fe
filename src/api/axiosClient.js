import axios from "axios";
import { parse, stringify } from 'qs'

export const host = 'localhost:8080'

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