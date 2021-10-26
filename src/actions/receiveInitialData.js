import { getInitialData  } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA'

function receiveInitialData(users, questions) {
    return {
        type: RECEIVE_INITIAL_DATA,
        payload: {
            users,
            questions,
        }
    }
}

export default function handleReceiveInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData()
        .then(({ users, questions }) => {
            dispatch(receiveInitialData(users, questions))
            dispatch(hideLoading())
        })
        .catch((error) => {
            console.error(RECEIVE_INITIAL_DATA, error)
        })
    }
}