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
    }
}

export default articleApi;