import React from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import ConnectedQuestion from './Question'

function Questions({ questionIds }) {
    return (
        <Container style={{ border: '1px solid black', padding: '25px', boxShadow: '0px 0px 5px black' }} fluid>
            <h3>Would You Rather...?</h3>
            {questionIds.map((questionId) => (
                <ConnectedQuestion key={questionId} questionId={questionId} />
            ))}
        </Container>
    )
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
                        .sort((a, b) => (questions[b].timestamp - questions[a].timestamp))
                    
    }
}

export default connect(mapStateToProps)(Questions)