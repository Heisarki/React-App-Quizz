export const fetchLevel = (payload) => {
    return {
        type: "LEVEL",
        payload: payload
    }
}

export const fetchCategory = (payload) => {
    return {
        type: "CATEGORY",
        payload: payload
    }
}