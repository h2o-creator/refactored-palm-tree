import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
    _authenticateUser,
    _saveUser,
} from './_DATA'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ])
    .then(([users, questions]) => (
        {
            users,
            questions,
        }
    ))
    .catch((error) => (
        console.log('Error reading data', error)
    ))
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(questionAnswer) {
    return _saveQuestionAnswer(questionAnswer)
}

export function authenticateUser(userData) {
    return _authenticateUser(userData)
}

export function saveUser(userData) {
    return _saveUser(userData)
}