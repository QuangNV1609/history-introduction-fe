import axiosClient from "./axiosClient"

const adminApi = {
    getListAdmin2: () => {
        return axiosClient.get("user/get-admin2")
    },
    getListRole: () => {
        return axiosClient.get("role/find-all")
    },
    blockAccount: (userName) => {
        return axiosClient.put(`user/block-account?username=${userName}`)
    },
    deleteAccount: (userName) => {
        return axiosClient.delete(`user/delete-account?username=${userName}`)
    },
    createUser: (data) => {
        return axiosClient.post("user/register", data)
    }
}

export default adminApi
