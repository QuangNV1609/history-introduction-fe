import axiosClient from "./axiosClient"

const qaApi = {
    saveQa: (listData) => {
        return axiosClient.post("question/save-list-question", listData)
    },
    searchQa: (status, period) => {
        let params = {}
        if (status > -1) {
            params.status = status
        }

        if (period > -1) {
            params.historicalPeriod = period
        }
        console.log(params, period)
        return axiosClient.get("question/search-question", {
            params: params
        })
    }
}

export default qaApi
