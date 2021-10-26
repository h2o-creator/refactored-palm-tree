import { RECEIVE_INITIAL_DATA } from '../actions/receiveInitialData'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_INITIAL_DATA: return { ...state, ...action.payload.questions }
        default: return state
    }
}