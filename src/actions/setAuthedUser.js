export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export default function setAuthedUser(user) {
    return {
        type: SET_AUTHED_USER,
        payload: {
            user,
        }
    }
}