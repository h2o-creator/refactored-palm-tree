import { RECEIVE_INITIAL_DATA } from '../actions/receiveInitialData'
import { ADD_NEW_QUESTION } from '../actions/addNewQuestion'
import { UPDATE_VOTE } from '../actions/UpdateVote'

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
        case UPDATE_VOTE: {
            const { payload } = action
            const { voteData } = payload
            const { qid, answer, authedUser } = voteData
            const option = answer
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [option]: {
                        votes: state[qid][option].votes.includes(authedUser) ?
                            state[qid][option].votes.filter((voter) => voter !== authedUser) :
                            state[qid][option].votes.concat(authedUser)
                    }
                }
            }
        }
        default: return state
    }
}