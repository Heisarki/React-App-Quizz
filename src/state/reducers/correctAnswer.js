const initial = {
    correctAnswer: 0,
}

export const correctAnswer = (state = 0, {type, payload}) => {
    switch (type) {
        case "UPDATE_ANSWER":
            return payload;
    
        default:
            return state;
    }
}