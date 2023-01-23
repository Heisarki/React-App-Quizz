export const questions = (state = ["what"], { type, payload }) => {
    switch (type) {
        case "FETCH_DATA":
            return payload
        default:
            return state;
    }
}