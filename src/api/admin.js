import axiosClient from "./axiosClient"

const adminApi = {
    getListAdmin2: () => {
        return axiosClient.get("user/get-admin2")
    },
    getListRole: () => {
        return axiosClient.get("role/find-all")
    }
}

export default adminApi
