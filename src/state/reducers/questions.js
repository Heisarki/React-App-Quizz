export const questions = (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH_DATA":
            return payload
        default:
            return state;
    }
}