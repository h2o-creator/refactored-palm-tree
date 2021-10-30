import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

function addQuestion(questionData) {
    return {
        type: ADD_NEW_QUESTION,
        payload: {
            questionData
        }
    }
}

export default function handleAddQuestion(questionData) {
    return (dispatch) => {
        dispatch(showLoading())
        saveQuestion(questionData)
        .then ((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion))
            dispatch(hideLoading())
        })
        .catch((error) => {
            console.error(ADD_NEW_QUESTION, error)
        })
    }
}