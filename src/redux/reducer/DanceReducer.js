import { FETCH__DANCE__REQUEST, PUSH__ID__DANCE } from "../types/Types";

const initialState = {
    listDanceContent: [],
    idDance: null
}
export const DanceReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH__DANCE__REQUEST: {
            state.listDanceContent = [...payload];
            return { ...state }
        }
        case PUSH__ID__DANCE: {
            state.idDance = payload;
            return { ...state }
        }
        default:
            return state;
    }
}