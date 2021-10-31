import { authenticateUser } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(user) {
    return {
        type: SET_AUTHED_USER,
        payload: {
            user,
        }
    }
}

export default function handleSetAuthedUser(userData) {
    return (dispatch) => {
        dispatch(showLoading())
        authenticateUser(userData)
        .then ((result) => {
            if (result === false) return alert('Invalid password, please try again!')
            dispatch(setAuthedUser(userData.user))
        })
        .catch((error) => {
            console.error(SET_AUTHED_USER, error)
        })
        .finally(() => {
            dispatch(hideLoading())
        })
    }
}