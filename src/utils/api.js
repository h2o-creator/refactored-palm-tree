import {
    _getUsers,
    _getQuestions
} from './_DATA'

export async function getInitialData() {
    try {
        const data = await Promise.all([
            _getUsers(),
            _getQuestions(),
        ])
        const [users, questions] = data
        return [
            users,
            questions
        ]
    } catch (error) {
        return console.log('Error reading data', error)
    }    
}