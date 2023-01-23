export const config = (state = ["Easy", "Random"], {type, payload}) => {
    switch (type) {
        case "LEVEL":
            return [config[0] = payload, config[1] = state[1]];
        case "CATEGORY":
            return [config[0] = state[0], config[1] = payload];
        // case "LINUX":
        //     return payload;
        // case "NETWORKING":
        //     return payload;
        // case "PROGRAMMING":
        //     return payload;
        
        default:
            return state
    }
}