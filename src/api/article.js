import axiosClient from "./axiosClient";

const baseUrl = '/article';

const articleApi = {
    create: (post) => {
        const url = baseUrl + '/save';
        return axiosClient.post(url, post, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    showDetail: () => {
        const url = baseUrl + '/find-by-id/203'
        return axiosClient.get(url);
    },
    getMyPost: () => {
        const url = baseUrl + '/find-all-by-username'
        return axiosClient.get(url);
    },
    approve: (id) => {
        const url = baseUrl + '/censorship'
        return axiosClient.put(url, id);
    },
    approveMultiple: (list) => {
        const url = baseUrl + '/censorship-list'
        return axiosClient.put(url, list);
    }
}

export default articleApi;