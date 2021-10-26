import { RECEIVE_INITIAL_DATA } from '../actions/receiveInitialData'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_INITIAL_DATA: return { ...state, ...action.payload.users }
        default: return state
    }
}