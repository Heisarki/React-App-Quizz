export const fetchAnswerKey = (ans) => {
    return {
        type: "UPDATE_ANSWER",
        payload: ans
    }
}

export const fetchQuestions = (payload) => {
    return {
        type: "FETCH_DATA",
        payload: payload
    }
}