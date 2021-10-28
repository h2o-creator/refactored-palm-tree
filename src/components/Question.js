import React from 'react'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

function Question({ author, optionOne, optionTwo, timestamp }) {
    const dateConst = new Date(timestamp)
    const date = dateConst.toLocaleDateString('en-IL');
    const time = dateConst.toLocaleTimeString('en-US');

    return (
        <>
            <Card style={{ padding: '20px' }}>
                <Card.Header>
                    <h4>{`Would you rather ${optionOne.text} (${optionOne.votes.length}) `} <span style={{ color: 'red' }}>||</span> {` (${optionTwo.votes.length}) ${optionTwo.text}? `}</h4>
                    <br />
                    <p className='blockquote-footer'>{`Asked by ${author} on ${date} at ${time}`}</p>
                </Card.Header>
                <Card.Body>
                    <br />
                    <Card.Text as='p' style={{ color: 'deepskyblue' }}>
                        {`${optionOne.votes.length} voted for the first option, ${optionTwo.votes.length} voted for the second`}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>    
    )
}

function mapStateToProps({ questions }, { questionId }) {
    const question = questions[questionId]
    const { author, optionOne, optionTwo, timestamp } = question

    return {
        author,
        optionOne,
        optionTwo,
        timestamp,
    }
}

export default connect(mapStateToProps)(Question)