import {
    SET_AUTHED_USER
} from '../actions/setAuthedUser'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER: return action.payload.user
        default: return state
    }
}