import { saveUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const ADD_NEW_USER = 'ADD_NEW_USER'

function addUser(userData) {
    return {
        type: ADD_NEW_USER,
        payload: {
            userData
        }
    }
}

export default function handleAddUser(userData) {
    return (dispatch) => {
        dispatch(showLoading())
        saveUser(userData)
        .then ((newUserData) => {
            dispatch(addUser(newUserData))
            dispatch(hideLoading())
        })
        .catch((error) => {
            console.error(ADD_NEW_USER, error)
        })
    }
}