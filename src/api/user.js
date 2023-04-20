import axiosClient from "./axiosClient";
import queryString from "query-string";

const baseUrl = '/user';

const userApi = {
    login: (user) => {
        const url = baseUrl + '/login';
        return axiosClient.post(url, user);
    },
    signIn: (user) => {
        const url = baseUrl + '/register-user';
        return axiosClient.post(url, user);
    },
    insertInfo: (userInfo) => {
        const url = baseUrl + '-info/save';
        return axiosClient.post(url, userInfo)
    },
    test: () => {
        const url = baseUrl + '/test';
        return axiosClient.get(url);
    }
}

export default userApi;