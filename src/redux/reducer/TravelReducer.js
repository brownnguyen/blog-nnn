import { FETCH__TRAVEL__REQUEST } from "../types/Types";

const initialState = {
    travelTopics: []
}
export const TravelReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH__TRAVEL__REQUEST: {
            state.travelTopics = [...payload];
            return { ...state }
        }
        default: return { ...state }
    }
}