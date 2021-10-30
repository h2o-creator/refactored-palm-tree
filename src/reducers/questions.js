import { RECEIVE_INITIAL_DATA } from '../actions/receiveInitialData'
import { ADD_NEW_QUESTION } from '../actions/addNewQuestion'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_INITIAL_DATA: return { ...state, ...action.payload.questions }
        case ADD_NEW_QUESTION: {
            return {
                ...state,
                [action.payload.questionData.id]: {
                    ...action.payload.questionData
                }
            }
        }
        default: return state
    }
}