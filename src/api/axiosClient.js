import axios from "axios";
import { parse, stringify } from 'qs'

const host = 'http://89f5-2001-ee0-41a1-cd3e-b4ed-346d-32ab-ffbb.ngrok.io'

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