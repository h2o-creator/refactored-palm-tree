import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const UPDATE_VOTE = 'UPDATE_VOTE'

function updateVote(voteData) {
    return {
        type: UPDATE_VOTE,
        payload: {
            voteData,
        }
    }
}

export default function handleUpdateVote(voteData) {
    return (dispatch) => {
        dispatch(showLoading())
        saveQuestionAnswer(voteData)
        .then(() => {
            dispatch(updateVote(voteData))
            dispatch(hideLoading())
        })
        .catch((error) => {
            console.error(UPDATE_VOTE, error)
        })
    }
}