import { FETCH__DATA__REQUEST } from "../type/Types";

const initialState = {
    mainTopic: {}
}
export const MainTopicReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH__DATA__REQUEST: {
            state.mainTopic = { ...payload.mainTopic };
            return { ...state }
        }
        default: return { ...state }
    }
}
