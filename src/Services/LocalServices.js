import { CreateAction } from '../redux/actions/CreateAction';
import { PUSH__ID__DANCE } from '../redux/types/Types';
class LocalStore {
    getIdDance(dispatch) {
        return dispatch => {
            const idDanceLocal = localStorage.getItem('idDance');
            if (idDanceLocal) {
                dispatch(CreateAction(PUSH__ID__DANCE, JSON.parse(idDanceLocal)))
            }
        }
    }
}

export const localStore = new LocalStore();