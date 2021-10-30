import React from 'react'
import { connect } from 'react-redux'
import ConnectedQuestion from './Question'
import Col from 'react-bootstrap/Col'

function Questions({ questionIds, questions }) {
    return (
        <>
            <Col>
                <h3>Unanswered Questions</h3>
                <hr />
                {questionIds.filter((questionId) => (questions[questionId].optionOne.votes.length === 0 &&
                    questions[questionId].optionTwo.votes.length === 0)).map((questionId) => (
                    <ConnectedQuestion key={questionId} questionId={questionId} />
                ))}
                <h3>Answered Questions</h3>
                <hr />
                {questionIds.filter((questionId) => (questions[questionId].optionOne.votes.length > 0 ||
                    questions[questionId].optionTwo.votes.length > 0)).map((questionId) => (
                    <ConnectedQuestion key={questionId} questionId={questionId} />
                ))}
            </Col>
        </>
    )
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
                        .sort((a, b) => (questions[b].timestamp - questions[a].timestamp)),
        questions,
                    
    }
}

export default connect(mapStateToProps)(Questions)