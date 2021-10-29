import React from 'react'
import { connect } from 'react-redux'
import ConnectedQuestion from './Question'
import Col from 'react-bootstrap/Col'

function Questions({ questionIds }) {
    return (
        <Col>
            {questionIds.map((questionId) => (
                <ConnectedQuestion key={questionId} questionId={questionId} />
            ))}
        </Col>
    )
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
                        .sort((a, b) => (questions[b].timestamp - questions[a].timestamp))
                    
    }
}

export default connect(mapStateToProps)(Questions)