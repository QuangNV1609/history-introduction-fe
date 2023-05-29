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
    },
    getExam: (numberQuestion, period) => {
        return axiosClient.get("question/get-question-for-exam", {
            params: {
                historicalPeriod: period,
                size: numberQuestion
            }
        })
    },
    saveUserScore: (data) => {
        return axiosClient.post("user-score/save", data)
    },
    getTopScore: (numberQuestion, period) => {
        return axiosClient.get("user-info/top-user-score", {
            params: {
                historicalPeriod:period,
                numOfQuestion: numberQuestion
            }
        })
    },
    getHistoryScore: () => {
        return axiosClient.get("user-info/history-user-score")
    },
    findAllQuizz: () => {
        return axiosClient.get("question/search-question", {
            params: {
                status: 0
            }
        })
    },
    approveQuizz: (data) => {
        return axiosClient.put("question/censorship-list", data)
    },
    removeQuizz: (data) => {
        return axiosClient.delete("question/delete-list", {
            data: data
        })
    }
}

export default qaApi
