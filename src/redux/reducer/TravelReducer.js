import { FETCH__DATA__REQUEST } from "../type/Types";

const initialState = {
    travelTopics: []
}
export const TravelReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH__DATA__REQUEST: {
            state.travelTopics = [...payload.travelTopic];
            return { ...state }
        }
        default: return { ...state }
    }
}