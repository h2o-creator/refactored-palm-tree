import {
    SET_REDIRECT_LOCATION
} from '../actions/setRedirectLocation'

export default function authedUser(state = '', action) {
    switch (action.type) {
        case SET_REDIRECT_LOCATION: return action.payload.pathname
        default: return state
    }
}