import { RECEIVE_INITIAL_DATA } from '../actions/receiveInitialData'
import { ADD_NEW_USER } from '../actions/addNewUser'
import { UPDATE_VOTE } from '../actions/UpdateVote'
import { ADD_NEW_QUESTION } from '../actions/addNewQuestion'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_INITIAL_DATA: return { ...state, ...action.payload.users }
        case ADD_NEW_USER: {
            const { payload } = action
            const { userData } = payload
            const { id, name, password, avatarURL } = userData
            return {
                ...state,
                [id]: {
                    id,
                    name,
                    password,
                    avatarURL,
                    questions: [],
                    answers: {}
                }
            }
        }
        case UPDATE_VOTE: {
            const { payload } = action
            const { voteData } = payload
            const { qid, answer, authedUser } = voteData            
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    },
                }
            }
        }
        case ADD_NEW_QUESTION: {
            const { payload } = action
            const { questionData } = payload
            const { id, author } = questionData
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.includes(id) ? 
                        (state[author].questions.filter((question) => question !== id)) : 
                        (state[author].questions.concat(id)),
                }
            }
        }
        default: return state
    }
}