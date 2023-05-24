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
    getInfo: () => {
        const url = baseUrl + '/info';
        return axiosClient.get(url);
    },
    test: () => {
        const url = baseUrl + '/test';
        return axiosClient.get(url);
    },
    changePassword: (updatePassword) => {
        const url = baseUrl + '/change-password';
        return axiosClient.put(url, updatePassword);
    }
}

export default userApi;