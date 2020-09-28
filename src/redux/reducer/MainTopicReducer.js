import { FETCH__MAINTOPIC__REQUEST } from "../types/Types";

const initialState = {
    mainTopic: {}
}
export const MainTopicReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH__MAINTOPIC__REQUEST: {
            state.mainTopic = { ...payload };
            return { ...state }
        }
        default: return { ...state }
    }
}
