export const SET_REDIRECT_LOCATION = 'SET_REDIRECT_LOCATION'

export function setRedirectLocation(pathname) {
    return {
        type: SET_REDIRECT_LOCATION,
        payload: {
            pathname,
        }
    }
}