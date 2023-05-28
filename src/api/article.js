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
    showDetail: (id) => {
        const url = baseUrl + '/find-by-id/' + id
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
    },
    getPostApproved: (isApproved) => {
        const url = baseUrl + '/find-all-by-censorship?isCensorship=' + isApproved 
        return axiosClient.get(url);
    },
    deletePost: (list) => {
        const url = baseUrl + '/delete-list-by-ids'
        return axiosClient.delete(url, {data: list});
    },
    getActivePost: () => {
        const url = baseUrl + '/search-article'
        return axiosClient.get(url);
    },
    getPeriodPost: (period) => {
        const url = baseUrl + '/search-article?historicalPeriod=' + period + '&postType=0&content=1'
        return axiosClient.get(url);
    },
    getHistoryDay: (date) => {
        const url = baseUrl + '/search-article?historyDay=' + date
        return axiosClient.get(url);
    },
    getPostHome: () => {
        const url = baseUrl + '/search-article?status=1'
        return axiosClient.get(url);
    },
    getFigurePost: () => {
        const url = baseUrl + '/search-article?postType=1&content=1'
        return axiosClient.get(url);
    },
    deleteOnePost: (id) => {
        const url = baseUrl + '/delete-list-by-id?articleId'
        return axiosClient.delete(url, {data: id});
    },
    getTopView: () => {
        const url = baseUrl + "-user/get-article-many-view"
        return axiosClient.get(url);
    },
    getRecentWatched: () => {
        const url = baseUrl + "-user/get-article-by-user"
        return axiosClient.get(url);
    }
}

export default articleApi;