import { RECEIVE_INITIAL_DATA } from '../actions/receiveInitialData'
import { ADD_NEW_USER } from '../actions/addNewUser'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_INITIAL_DATA: return { ...state, ...action.payload.users }
        case ADD_NEW_USER: {
            const { payload } = action
            const { userData } = payload
            const { id, name, password, avatarURL } = userData
            return {
                ...state,
                [id]: {
                    id,
                    name,
                    password,
                    avatarURL,
                    questions: [],
                    answers: {}
                }
            }
        }
        default: return state
    }
}