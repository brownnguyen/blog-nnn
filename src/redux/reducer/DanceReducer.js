import { FETCH__DATA__REQUEST, PUSH__ID__DANCE } from "../type/Types";

const initialState = {
    listDanceContent: [],
    idDance: {},
    danceAwards: [],
    danceInfo: {}
}
export const DanceReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH__DATA__REQUEST: {
            console.log(payload)
            state.listDanceContent = [...payload.danceTopic];
            state.danceAwards = [...payload.danceAwards]
            state.danceInfo = { ...payload.danceinFo }
            return { ...state }
        }
        case PUSH__ID__DANCE: {
            state.idDance = payload;
            localStorage.setItem('idDance', JSON.stringify(state.idDance));
            return { ...state }
        }
        default:
            return state;
    }
}